/* Provider para el contexto dinamico de carrito de compras */
/* Importación de librerías */
import { useEffect,useState } from "react";
/* Importación Componetes */
import { alertExito } from "../Componentes/Alerts/Alertas";
/* Importación del contexto */
import cartContext from "./CartContext";

const Provider = ({ children }) => {
    /* Provider del local storage para guardar en el state el carrito de compras y hacerlo persistente */
    const obtenerCarritoStorage=()=> {
        let carritoJSON = localStorage.getItem("carrito");
        if (carritoJSON) {
            return(JSON.parse(carritoJSON));
        }
    } 
    /* Variable para agregar al carrito la onAdd */
    const [carrito, setCarrito] = useState(obtenerCarritoStorage()===undefined ?[]: obtenerCarritoStorage());
    /* Función agregar al arreglo de carrito */
    const addItem = (item) => {
        /* Si el carrito tiene item entonces actualiza la cantidad */
        if (isInCart(item.id)) {
            carrito.forEach((prod) => {
                if (prod.id === item.id) {
                    prod.cantidad += item.cantidad;
                }
            });
        }
        else {
            setCarrito((items) => [...items, item]);//Agrega al arr carrito un nuevo objeto item
        }
        alertExito(`${item.nombre} agregado al carrito`)
    }

    /* Función para verificar si el producto ya ha sido agregado al carrito */
    const isInCart = (id) => {
        return (carrito.some((item) => item.id === id));
    }
    /* Funcion para encontrar un producto por su id */
    const getProduct = (idP) => {
        let index = carrito.findIndex((item) => Number(item.id) === Number(idP));
        return carrito[index];
    }
    /* Funcion para saber la cantidad de productos en el carrito */
    const QtyOfProducts = (carrito) => {
        let acumulador=0;
        Object.keys(carrito).length !==0 && carrito.forEach((item)=> acumulador+=item.cantidad);
        return acumulador;
    }
    /* Función para borrar el objeto del carrito */
    const removeFromCart = (idP) => { /* Realizar un filter para regresar los elementos donde el id!=al idp y luego ingresar el valor filtrado al set */
        let cartFiltered = carrito.filter((item)=>Number(item.id)!==Number(idP))//Encuentra el indice a borrar por id
        localStorage.clear();
        setCarrito(cartFiltered);//Se ingresa el carrito filtrado como set
        alertExito(`Producto Eliminado del carrito`);
    }
    /* Función de borrar todo el carrito */
    const clearCart = () => { 
        setCarrito([]);
    } 
    /* Funcion para calcular subtotal del carrito */
    const subTotal=()=>{
        let total=0;
        carrito.forEach((item)=>total+=item.cantidad*item.precio);
        return total;
    }
        /* Effect para hacer un update al storage cada que el carrito cambia */
        useEffect(() => {
            if (QtyOfProducts(carrito) === 0) {
                localStorage.clear();
            } else {
                let productosJSON;
                productosJSON = JSON.stringify(carrito);
                localStorage.setItem("carrito", productosJSON);
            }
        }, [carrito])
    return (<cartContext.Provider value={{
        carrito: carrito,
        agregarCarrito: addItem,
        existeEnCarrito: isInCart,
        removerDeCarrito: removeFromCart,
        borrarCarrito: clearCart,
        obtenerPorId: getProduct,
        cantidadEnCarrito: QtyOfProducts,
        calcularSubTotal: subTotal
    }}>
        {children}
    </cartContext.Provider>)
}

export default Provider;