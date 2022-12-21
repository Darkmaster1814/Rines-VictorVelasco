import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';//Importamos el contexto
import cartContext from '../../Context/CartContext';//Para obtener cuando se agrega un articulo al carrito
/* Widget del carrito */
const Cart = ({ nombre, evento }) => {
    /* Elementos para cambiar el estado del icono cuando no hay articulos en el carrito es false*/
    const productos=useContext(cartContext);
    const [flag,setFlag]=useState("");
    useEffect(()=>{
        productos.cantidadEnCarrito(productos.carrito)!==0 ? setFlag(<i className="nav-i fa-sharp fa-solid fa-cart-plus text-center"><p className="textHeader">{nombre}</p></i>):setFlag(<i className="nav-i fa-sharp fa-solid fa-cart-arrow-down text-center"><p className="textHeader">{nombre}</p></i>);
    },[productos.carrito]);
    return (
        <>
            <button className="btn-nav mt-4 me-md-5" onClick={evento}>
                {flag}
            </button>
        </>
    );
}
export default Cart;