/* Componente de cantidad en cada descripción de carrito para agregar mas o menos productos */
import Botton from '../Botones/Botton';
import { useState } from "react";
const ItemCount = (props) => {
    /* Variable de contador de productos en el state */
    let [contador, setContador] = useState(1)
    /* Variable para agregar al carrito la onAdd */
    let [carrito, setCarrito] = useState(null)
    /* Funcion para aumentar los productos antes de agregarlos al carrito */
    let aumentarCarrito = () => { contador < props?.cantidad ? setContador(++contador) : setContador(props?.cantidad) };
    /* Función para disminuir los productos antes de agregarlos al carrito */
    let disminuirCarrito = () => { contador > 1 ? setContador(--contador) : setContador(1) };
    /* Función para agregar al carrito */
    let agregarCarrito = () => { setCarrito(contador) }
    return (
        <div className="col-md-12">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6"><p> QTY: <Botton clase="fa-solid fa-plus" evento={() => { aumentarCarrito() }} /> {contador} <Botton clase="fa-solid fa-minus" evento={() => { disminuirCarrito() }} /></p></div>
                    <div className='col-6'><Botton clase="fa-solid fa-cart-shopping bg-cart-item fs-3" evento={() => { agregarCarrito() }} /></div>
                </div>
            </div>
        </div>)
}

export default ItemCount;