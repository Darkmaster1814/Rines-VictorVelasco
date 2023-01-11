/* Contexto del carrito de compras, posee las funcionalidades básicas para agregar o eliminar del carrito así como acceder a su variable de estado para saber las cantidades agregadas a carrito en cada momento */
/* Importar libreria*/
import { createContext } from "react";
let cartContext=createContext({
    carrito: [],
    agregarCarrito: ()=>{},
    existeEnCarrito: ()=>{},
    removerDeCarrito: ()=>{},
    borrarCarrito:()=>{},
    obtenerPorId:()=>{},
    cantidadEnCarrito:()=>{},
    calcularSubTotal:()=>{}
});

export default cartContext;
