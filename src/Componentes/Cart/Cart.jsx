import { useContext } from "react";
import cartContext from "../../Context/CartContext";
import Botton from "../Botones/Botton";
const Cart = (props) => {
    const ContextoCarrito = useContext(cartContext)
    /* Render de cada card del carrito */
    const renderCard = () => {
        return (<div className='card mt-2 mb-2' key={props.producto.id}>
            <div className='row'>
                <div className="col-4">
                    <img src={props.producto.imagen} style={{ width: "180px" }} alt=" producto carrito de compras" />
                </div>
                <div className='col-6 align-middle'>
                    <h3>{props.producto.nombre}</h3>
                    <h4>Cantidad: {props.producto.cantidad} PZ</h4>
                    <h4>Precio: $ {parseFloat(props.producto.precio) * parseInt(props.producto.cantidad)}</h4>
                </div>
                <div className='col-1'> <Botton clase='fa-solid fa-xmark' evento={() => { ContextoCarrito.removerDeCarrito(props.producto.id) }} /></div>
            </div>
        </div>)
    }
    return (<>{renderCard()}</>)
}

export default Cart;