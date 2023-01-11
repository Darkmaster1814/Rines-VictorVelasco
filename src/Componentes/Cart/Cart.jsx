/* Componente de Card de cada articulo agregado a carrito */
/* Importación de librerias */
import { useContext } from "react";
/* Importación de contextos */
import cartContext from "../../Context/CartContext";
/* Importación de componentes */
import Botton from "../Botones/Botton";
const Cart = (props) => {
    const ContextoCarrito = useContext(cartContext);//Contexto del carrito
    /* Render de cada card de articulos agregados al carrito */
    const renderCard = () => {
        return (<div className='card mt-2 mb-2' key={props.producto.id}>
            <div className="col-10">
                <div className='row'>
                    <div className="col-10">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <img src={props.producto.imagen} style={{ width: "180px" }} alt=" producto carrito de compras" />
                                </div>
                                <div className='col-md-8 col-sm-12'>
                                    <h3>{props.producto.nombre}</h3>
                                    <h4>Cantidad: {props.producto.cantidad} PZ</h4>
                                    <h4>Precio: $ {parseFloat(props.producto.precio) * parseInt(props.producto.cantidad)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'>
                        <Botton clase='fa-solid fa-xmark' evento={() => { ContextoCarrito.removerDeCarrito(props.producto.id) }} />
                    </div>
                </div>
            </div>
        </div>)
    }
    return (<>{renderCard()}</>)
}

export default Cart;