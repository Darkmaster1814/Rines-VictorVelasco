import { createContext } from "react";

/* Contexto de carrito de compras (variable "global") */
let cartContext=createContext({
    carrito: [],
    agregarCarrito: ()=>{},
    existeEnCarrito: ()=>{},
    removerDeCarrito: ()=>{},
    borrarCarrito:()=>{},
    obtenerPorId:()=>{},
    cantidadEnCarrito:()=>{}
});//Con default value de array vacio

export default cartContext;
