import { useContext } from "react";
import cartContext from "../../Context/CartContext";
import LoginContext from "../../Context/LoginContext";
import BottonClassic from "../Botones/BottonClassic";
import { getFirestore } from 'firebase/firestore';
import {setOrders} from '../../Queries/ordenes';//Querys para agregar orden de compra a la db en firebase
import {getProductById,setProductById} from '../../Queries/productos';
import { Link } from "react-router-dom";
const OrderDetails = () => {
    const ContextoCarrito = useContext(cartContext);//Contexto del carrito para calcular el subtotal y total de compra del carrito
    const ContextoLogin=useContext(LoginContext)//Contexto del login para acceder a los datos de envío
    /* Función de prueba para calcular el costo de envio */
const shippmentCost=()=>{
    let porcentajeEnvio=5;//Porcentaje de cobro de envio
    return(ContextoCarrito.calcularSubTotal()*(porcentajeEnvio/100));
}
/* Función de generar orden de compra */
const generateBuyOrder=()=>{
    let date=(new Date().getMinutes()+"-"+new Date().getHours()+"-"+(new Date().getDay()+1)+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear())
    let orderFinal={
        "usuario":ContextoLogin.usuarios,
        "carrito":ContextoCarrito.carrito,
        "total":parseFloat(ContextoCarrito.calcularSubTotal())+parseFloat(shippmentCost())
    }/* Actualizar inventario en db */
    const db=getFirestore();
    /* Agregar orden a la DB */
    setOrders(db,ContextoLogin.mail,date,orderFinal);
    /* Actualiza las cantidades en los productos que fueron comprados dentro de la db */
    ContextoCarrito.carrito.forEach((producto)=>{
        getProductById(db,""+producto.id).then((item)=>setProductById(db,""+item.id,{
            "id":parseInt(item.id),
            "nombre":item.nombre,
            "descripcion":item.descripcion,
            "categoria":item.categoria,
            "cantidad":parseFloat(item.cantidad-producto.cantidad),
            "precio": parseFloat(item.precio),
            "imagen":item.imagen}))
        
    })
    localStorage.clear();//Limpiar el carrito
    ContextoCarrito.borrarCarrito();//Borrar carrito
}
    return (<div className="container-fluid m-3">
        <div className="row">
            <div className="col-12">
                <h4 className="mb-5">Total</h4>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <p>SUBTOTAL</p>
                        </div>
                        <div className="col-6"><p className="text-start">${ContextoCarrito.calcularSubTotal()}</p></div>
                        <div className="col-6">
                            <p>ENVIO</p>
                        </div>
                        <div className="col-6"><p className="text-start">${shippmentCost()}</p></div>
                    </div>
                </div>
                <strong><p className="mt-5 mb-4">Datos del Envío</p></strong>
                <p className="mb-0">{ContextoLogin.usuarios.nombre} {ContextoLogin.usuarios.apellido}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.usuarios.direccion}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.usuarios.ciudad}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.usuarios.cp}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.usuarios.telefono}</p>
                <hr className="mt-0 mb-3"/>
            </div>
            <hr className="mt-5 mb-5"/>
            <div className="col-12">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                        <strong><p>TOTAL</p></strong>
                        </div>
                        <div className="col-6">
                        <strong><p className="text-end">${parseFloat(ContextoCarrito.calcularSubTotal())+parseFloat(shippmentCost())}</p></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5 mb-5">
                <Link to="/compras"><BottonClassic evento={() => generateBuyOrder()} clase="container-fluid rounded bg-item border-danger" texto="PROCEDER AL PAGO"/></Link>
            </div>
        </div>
    </div>)
}

export default OrderDetails;