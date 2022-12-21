import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';//Importamos el contexto
import cartContext from '../../Context/CartContext';//Para obtener cuando se agrega un articulo al carrito
import Cart from './Cart';
const CartList=()=>{
    const ContextoCarrito=useContext(cartContext);//Importamos el carrito de compras desde su contexto
    const obtenerCarritoStorage=()=> {
        let carritoJSON = localStorage.getItem("carrito");
        if (carritoJSON) {
            return(JSON.parse(carritoJSON));
        }
    } 

    const [carrito,setCarrito]=useState(null);//State del render de card para el carrito
    useEffect(()=>{  
        console.log("Carrito obtenido del storage",carrito)
        setCarrito(obtenerCarritoStorage())},[carrito])
    const [counter,setCounter]=useState("")//Contador de articulos
    useEffect(()=>{ 
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito)!==0 ? setCounter(`${ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito)} Articulos`):setCounter("");
    },[ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito),counter])
    
    
    const renderCards=()=>{
        return(ContextoCarrito.carrito.map((item)=><Cart producto={item}/>))
    }
    return(<div className='row'>
        <h2>{counter}</h2>
        {renderCards()}
    </div>)
}
export default CartList;