/* Componente de cantidad en cada descripción de carrito para agregar mas o menos productos */
import Botton from '../Botones/Botton';
import BottonClassic from "../Botones/BottonClassic";
import { Link } from 'react-router-dom';//libreria de link para las rutas
import { useState } from "react";
import { useEffect } from 'react';
import { useContext } from 'react';//Importamos el contexto
import cartContext from '../../Context/CartContext';
const ItemCount = (props) => {
        /* Variable para agregar al carrito la onAdd */
        let carrito=useContext(cartContext);
    /* Variable de cantidad, esta será puesta en el state para cambiar su estado cada que se agrega un producto */
    let [qty, setQty]=useState(props.producto?.cantidad-(carrito.cantidadEnCarrito(carrito.carrito)!==0 ? carrito.obtenerPorId(props.producto?.id).cantidad:0))//Se usa tambien la cantidad en el carrito para restringir la cantidad que puede agregar el usuario
    /* UseEffect para montar la cantidad y renderizar cada que haya un cambio en esta al agregar a carrito */
    useEffect(()=>setQty(props.producto?.cantidad),[props.producto?.cantidad])
    /* Variable de contador de productos en el state */
    let [contador, setContador] = useState(1);
    /* Funcion para aumentar los productos antes de agregarlos al carrito */
    let aumentarCarrito = () => { contador < qty ? setContador(++contador) : setContador(qty) };
    /* Función para disminuir los productos antes de agregarlos al carrito */
    let disminuirCarrito = () => { contador > 1 ? setContador(--contador) : setContador(1) };
    /* Función para agregar al carrito */
    /* Clase constructora para crear un objeto de carrito */
    class Carrito{
        constructor(...cart){
            this.id=cart[0];
            this.nombre=cart[1];
            this.precio=cart[2];
            this.cantidad=cart[3];
            this.imagen=cart[4];
        }
    }
    /* Función OnClick para agregar al carrito */
    let agregarCarrito = () => {
        if(qty>0){
        let idProducto= props.producto?.id;
        let nombreProducto=props.producto?.nombre;
        let imagenProducto=props.producto?.imagen;
        let precioProducto=props.producto?.precio;
        let cantidadProducto=contador;
/* Función sacada del context del carrito para agregar un objeto */
        carrito.agregarCarrito(new Carrito(idProducto,nombreProducto,precioProducto,cantidadProducto,imagenProducto));//Función para agregar al carrito un objeto
        setQty(qty-contador);
        setContador(1);
        }
        else{alert("Sin stock")}
        }
    return (
        <div className="col-md-12">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6"><p> QTY: <Botton clase="fa-solid fa-plus" evento={() => { aumentarCarrito() }} /> {contador} <Botton clase="fa-solid fa-minus" evento={() => { disminuirCarrito() }} /></p></div>
                    <div className='col-6'><Botton clase="fa-solid fa-cart-shopping bg-cart-item fs-3" evento={() => { agregarCarrito() }} /></div>
                    <div className="col-md-7"><Link to='/cart'><BottonClassic clase="container-fluid rounded bg-item" texto="COMPRAR" evento={()=>{agregarCarrito()}}/></Link></div>
                </div>
            </div>
        </div>)
}

export default ItemCount;