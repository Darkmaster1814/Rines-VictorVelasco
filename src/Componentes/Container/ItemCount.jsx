/* Componente de cantidad en cada descripción de carrito para agregar mas o menos productos */
import Botton from '../Botones/Botton';
import { useState } from "react";
import { useEffect } from 'react';
const ItemCount = (props) => {
    /* Variable de cantidad, esta será puesta en el state para cambiar su estado cada que se agrega un producto */
    let [qty, setQty]=useState(props.producto?.cantidad)
    /* UseEffect para montar la cantidad y renderizar cada que haya un cambio en esta al agregar a carrito */
    useEffect(()=>setQty(props.producto?.cantidad),[props.producto?.cantidad])
    /* Variable de contador de productos en el state */
    let [contador, setContador] = useState(1);
    /* Variable para agregar al carrito la onAdd */
    let [carrito, setCarrito] = useState(null);
    console.log(carrito);
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
        }
    }
    /* Función OnClick para agregar al carrito */
    let agregarCarrito = () => {
        if(qty>0){
        let idProducto= props.producto?.id;
        let nombreProducto=props.producto?.nombre;
        let precioProducto=props.producto?.precio;
        let cantidadProducto=carrito===null ? contador:contador+carrito.cantidad;//Para agregar de forma acumulativa el mismo producto al carrito
        setCarrito(new Carrito(idProducto,nombreProducto,precioProducto,cantidadProducto));
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
                </div>
            </div>
        </div>)
}

export default ItemCount;