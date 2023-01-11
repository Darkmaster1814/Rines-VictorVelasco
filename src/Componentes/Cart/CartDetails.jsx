/* Detalles del carrito de productos */
/* Importación de librerias */
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
/* Importación de los contextos */
import cartContext from '../../Context/CartContext';//Para obtener cuando se agrega un articulo al carrito
import LoginContext from '../../Context/LoginContext';
/* Importación de componentes */
import Cart from './Cart';
import BottonClassic from "../Botones/BottonClassic";

const CartDetails = () => {
    const ContextoCarrito = useContext(cartContext);//Importamos el carrito de compras desde su contexto
    const ContextoLogin=useContext(LoginContext);//Importamos el contexto del login para dar funcionalidad al boton de comprar con el routering(Si login true: envia a compra false: envia a Ingresar)
    const [counter, setCounter] = useState("")//Contador de articulos
    const [subTotal, setSubTotal] = useState("");//Subtotal del carrito de compras
        const [bottonComprar, setBotonComprar] = useState("");//Boton dinámico de comprar, cambia su ruta y función dependiento de los articulos en el carrito
    /* Montaje del contador de articulos del carrito para detalles */
    useEffect(() => {
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setCounter(`${ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito)} Articulos`) : setCounter("");
    }, [ContextoCarrito, counter])
    
    /* Montaje de los detalles de subtotal dentro del carrito, se actualiza cada que cambian los articulos dentro del carrito */
    useEffect(() => {
            /* Render del subtotal */
    const renderSubtotal = () => {
        return (<div className='col-12'>
            <div className='row'>
                <div className='col-3'>
                    <h4 className='m-1'>Subtotal ({counter})</h4>
                </div>
                <div className='col-7'>
                    <h4 className='m-1 text-end'>${ContextoCarrito.calcularSubTotal()}</h4>
                </div>
            </div>
        </div>);
    }
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setSubTotal(renderSubtotal()) : setSubTotal("");
    }, [ContextoCarrito, counter])
    /* Montaje del botón dinámico de comprar en el carrito:
    ->Si el carrito está vacío dirije al inicio "/"
    ->Si el carrito tiene articulos y el usuario no ha iniciado sesión, dirige a "/login"
    ->Si el carrito tiene articulos y el usuario inició sesión dirige hacia el checkout de compra "/cart/brief"*/
    useEffect(() => {
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setBotonComprar(ContextoLogin.isLoggedin ? <Link to="/cart/brief"><BottonClassic clase="container-fluid rounded bg-item mb-4" texto="COMPRAR"/></Link>:<Link to="/login"><BottonClassic clase="container-fluid rounded bg-item mb-4" texto="COMPRAR"/></Link>) : setBotonComprar(<Link to="/"><BottonClassic clase="container-fluid rounded bg-item" texto="VOLVER A INICIO"/></Link>)
    }, [ContextoCarrito,ContextoLogin])

    /* Renderizado de las card del carrito */
    const renderCards = () => {
        return (ContextoCarrito.carrito.map((item) => <div key={item.id}><Cart producto={item}/></div>))
    }
    const renderDetails=()=>{
        return(<div className='row'>
        <h3>{counter}</h3>
        {ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? renderCards() : <h2 className='text-center'>¡Aun no hay nada por aquí!<br />Agrega algun item y vuelve aquí para finalizar tu compra </h2>}
        <hr className='mt-4'/>
        {subTotal}
        <div className=' mt-5 col-12'>{bottonComprar}</div>
    </div>)
    }
    return (<>{renderDetails()}</>)
}
export default CartDetails;