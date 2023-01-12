/* Componente de cantidad en cada descripción de carrito para agregar mas o menos productos */
import Botton from '../../Botones/Botton';
/* Componente de cantidad agregar ala carrito, posee dos botones para agregar mas o menos cantidad a carrito y un boton para agregar al carrito y seguir comprando o comprar para ingresar directamente al carrito agregando la cantidad dada el en counter  */
/* Importación de librerías */
import { Link } from 'react-router-dom';//libreria de link para las rutas
import { useState, useEffect, useContext } from "react";
/* Importación de contexto */
import cartContext from '../../../Context/CartContext';
/* Importación de componentes */
import { alertFracaso } from '../../Alerts/Alertas';
import BottonClassic from "../../Botones/BottonClassic";

const ItemCount = ({producto}) => {
    let carrito = useContext(cartContext);/* Variable para agregar al carrito la onAdd */
    /* Variable de cantidad, esta será puesta en el state para cambiar su estado cada que se agrega un producto */
    let [qty, setQty] = useState(null);//Se usa tambien la cantidad en el carrito para restringir la cantidad que puede agregar el usuario
    /* UseEffect para montar la cantidad y renderizar cada que haya un cambio en esta al agregar a carrito */
    useEffect(() => setQty(producto?.cantidad - (carrito.existeEnCarrito(producto?.id) ? carrito.obtenerPorId(producto?.id).cantidad : 0)), [carrito, producto.id, producto.cantidad, carrito.carrito]);
    /* Variable de contador de productos en el state */
    let [contador, setContador] = useState(1);
    /* Funcion para aumentar los productos antes de agregarlos al carrito */
    let aumentarCarrito = () => { contador < qty ? setContador(++contador) : setContador(qty) };
    /* Función para disminuir los productos antes de agregarlos al carrito */
    let disminuirCarrito = () => { contador > 1 ? setContador(--contador) : setContador(1) };
    /* Función para agregar al carrito */
    let agregarCarrito = () => {
        if (qty > 0) {
            let idProducto = producto?.id;
            let nombreProducto = producto?.nombre;
            let imagenProducto = producto?.imagen;
            let precioProducto = producto?.precio;
            let cantidadProducto = contador;
            /* Función sacada del context del carrito para agregar un objeto */
            carrito.agregarCarrito({
                "id": idProducto,
                "nombre": nombreProducto,
                "precio": precioProducto,
                "cantidad": cantidadProducto,
                "imagen": imagenProducto
            });//Función para agregar al carrito un objeto
            setQty(qty - contador);
            setContador(1);
        }
        else { alertFracaso("No hay stock") }
    } 
    const renderAgregarCarrito = () => {
        return (<div className="col-md-12">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6"><p> QTY: <Botton clase="fa-solid fa-plus" evento={() => { aumentarCarrito() }} /> {contador} <Botton clase="fa-solid fa-minus" evento={() => { disminuirCarrito() }} /></p></div>
                    <div className='col-6'><Botton clase="fa-solid fa-cart-shopping bg-cart-item fs-3" evento={() => { agregarCarrito() }} /></div>
                    <div className="col-md-7"><Link to='/cart'><BottonClassic clase="container-fluid rounded bg-item" texto="COMPRAR" evento={() => { agregarCarrito() }} /></Link></div>
                </div>
            </div>
        </div>)
    }
    return (<>{renderAgregarCarrito()}</>)
}

export default ItemCount;