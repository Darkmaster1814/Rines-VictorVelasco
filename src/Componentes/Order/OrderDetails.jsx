import { useContext } from "react";
import cartContext from "../../Context/CartContext";
import LoginContext from "../../Context/LoginContext";
import BottonClassic from "../Botones/BottonClassic";

const OrderDetails = () => {
    const ContextoCarrito = useContext(cartContext);//Contexto del carrito para calcular el subtotal y total de compra del carrito
    const ContextoLogin=useContext(LoginContext)//Contexto del login para acceder a los datos de envío
    /* Función de prueba para calcular el costo de envio */
const shippmentCost=()=>{
    let porcentajeEnvio=5;//Porcentaje de cobro de envio
    return(ContextoCarrito.calcularSubTotal()*(porcentajeEnvio/100));
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
                <p className="mb-0">{ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).nombre} {ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).apellido}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).direccion}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).ciudad}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).cp}</p>
                <hr className="mt-0 mb-3"/>
                <p className="mb-0">{ContextoLogin.obtenerUsuarioPorEmail(ContextoLogin.mail).telefono}</p>
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
                <BottonClassic  clase="container-fluid rounded bg-item" texto="PROCEDER AL PAGO"/>
            </div>
        </div>
    </div>)
}

export default OrderDetails;