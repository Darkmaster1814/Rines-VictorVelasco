/* Provider para el contexto dinamico de carrito de compras */
import { useState } from "react";
import cartContext from "./CartContext";

const Provider=({children})=>{
    /* Variable para agregar al carrito la onAdd */
    const [carrito, setCarrito] = useState([]);
            /* Función agregar al arreglo de carrito */
            const addItem=(item)=>{
                /* Si el carrito tiene item entonces actualiza la cantidad */
                if(isInCart(item.id)){
                    carrito.forEach((prod) => {
                        if(prod.id===item.id)
                        {
                            prod.cantidad+=item.cantidad;
                            console.log(carrito);
                        }
                    });
                }
                else{
                    setCarrito((items)=>[...items,item]);//Agrega al arr carrito un nuevo objeto item
                    console.log(carrito);
                }
            }
            /* Función para verificar si el producto ya ha sido agregado al carrito */
            const isInCart=(id)=>{
                return( carrito.some((item)=> item.id===id));
            }
            /* Función para borrar el objeto del carrito */
            const removeFromCart=(idP)=>{
                let indexToRemove=carrito.findIndex((item)=>Number(item.id)===Number(idP));//Encuentra el indice a borrar por id
                console.log(indexToRemove);
                carrito.splice(indexToRemove,1);//Remueve el producto del arreglo;
                console.log(carrito);
            }
            /* Función de borrar todo el carrito */
            const clearCart=()=>{
                setCarrito([]);
            }
    return(<cartContext.Provider value={{
        carrito,
        agregarCarrito: addItem,
        existeEnCarrito:isInCart,
        removerDeCarrito:removeFromCart,
        borrarCarrito:clearCart}}>
                {children}
            </cartContext.Provider>) 
}

export default Provider;