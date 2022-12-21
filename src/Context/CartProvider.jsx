/* Provider para el contexto dinamico de carrito de compras */
import { useEffect,useState } from "react";
import cartContext from "./CartContext";

const Provider = ({ children }) => {
    /* Variable para agregar al carrito la onAdd */
    const [carrito, setCarrito] = useState([]);
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
        console.log(Object.keys(carrito).length + 1)//Para saber el tamaño del array del carrito
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
        return (Object.keys(carrito).length);
    }
    /* Función para borrar el objeto del carrito */
    const removeFromCart = (idP) => { 
        let indexToRemove = carrito.findIndex((item) => Number(item.id) === Number(idP));//Encuentra el indice a borrar por id
        localStorage.clear();
        carrito.splice(indexToRemove, 1);//Remueve el producto del arreglo;
        actualizarProductosStorage(carrito);//Actualiza el storage con los productos
        console.log("Se elimino un articulo del carrito", carrito);
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

    /* actualizar el storage local con el JSON */
    const actualizarProductosStorage = (carrito) => {
        if (QtyOfProducts(carrito) === 0) {
            localStorage.clear();
        } else {
            let productosJSON;
            productosJSON = JSON.stringify(carrito);
            localStorage.setItem("carrito", productosJSON);
        }
    }
        /* Effect para hacer un update al storage cada que el carrito cambia */
        useEffect(() => actualizarProductosStorage(carrito), [carrito])
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