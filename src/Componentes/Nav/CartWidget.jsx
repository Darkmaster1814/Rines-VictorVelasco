/* Componente de boton widget del carrito de compras, se trata de un botón dinámico que muestra la cantidad agregada en el carrito */
/* Importación de las librerias */
import { useState, useEffect, useContext } from 'react';
/* Importación de los componentes */
import cartContext from '../../Context/CartContext';//Para obtener cuando se agrega un articulo al carrito
import ButtonWidget from '../Botones/ButtonWidget';
/* Widget del carrito */
const Cart = () => {
    /* Elementos para cambiar el estado del icono cuando no hay articulos en el carrito es false*/
    const ContextoCarrito = useContext(cartContext);//Uso del cart context para saber cantidades en el carrito
    const [typeButton, setTypeButton] = useState("");//Uso del variable de estado par cambiar el icono dependiendo de las cantidades en el carrito
    const [qtyOnCart, setQtyOnCart] = useState("");//Variable de estado del texto del widget, indica si hay uno o mas articulos en el carrito
    /* Montaje del componente de boton dinámico:
    ->Si no hay articulos agregados muestra icono con carrito y una flecha hacia abajo y texto CARRITO
    ->Si tiene uno o mas articulos agregados muestra icono de carrito (+) con texto de Articulos y cantidad agregada */
    useEffect(() => {
        setQtyOnCart("Articulos" + " " + ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito));
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setTypeButton(<ButtonWidget nombre={qtyOnCart} tipo="nav-i fa-sharp fa-solid fa-cart-plus text-center" />) : setTypeButton(<ButtonWidget nombre="carrito" tipo="nav-i fa-sharp fa-solid fa-cart-arrow-down text-center" />);
    }, [ContextoCarrito, qtyOnCart]);
    return (
        <>
            {typeButton}
        </>
    );
}
export default Cart;