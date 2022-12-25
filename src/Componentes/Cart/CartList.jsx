import { useEffect, useState, useContext } from 'react';
import cartContext from '../../Context/CartContext';//Para obtener cuando se agrega un articulo al carrito
import Cart from './Cart';
import BottonClassic from "../Botones/BottonClassic";
import { Link } from 'react-router-dom';
import LoginContext from '../../Context/LoginContext';
const CartList = () => {
    const ContextoCarrito = useContext(cartContext);//Importamos el carrito de compras desde su contexto
    const ContextoLogin=useContext(LoginContext);//Importamos el contexto del login para dar funcionalidad al boton de comprar con el routering(Si login true: envia a compra false: envia a Ingresar)
    const [counter, setCounter] = useState("")//Contador de articulos
    useEffect(() => {
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setCounter(`${ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito)} Articulos`) : setCounter("");
    }, [ContextoCarrito.carrito, counter])
    /* State y effect para calcular el subtotal */
    const [subTotal, setSubTotal] = useState("");//Subtotal del carrito de compras
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
    /* Effect del subtotal */
    useEffect(() => {
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setSubTotal(renderSubtotal()) : setSubTotal("");
    }, [ContextoCarrito.carrito, counter])
    /* State para el boton de comprar o de regresar a inicio */
    const [bottonComprar, setBotonComprar] = useState("");
    /* Effect para el boton condicional */
    useEffect(() => {
        ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? setBotonComprar(ContextoLogin.isLoggedin ? <Link to="/cart/order"><BottonClassic clase="container-fluid rounded bg-item mb-4" texto="COMPRAR"/></Link>:<Link to="/login"><BottonClassic clase="container-fluid rounded bg-item mb-4" texto="COMPRAR"/></Link>) : setBotonComprar(<Link to="/"><BottonClassic clase="container-fluid rounded bg-item" texto="VOLVER A INICIO"/></Link>)
    }, [ContextoCarrito.carrito])
    /* Renderizado de las card del carrito */
    const renderCards = () => {
        return (ContextoCarrito.carrito.map((item) => <Cart producto={item} />))
    }

    return (<div className='row'>
        <h3>{counter}</h3>
        {ContextoCarrito.cantidadEnCarrito(ContextoCarrito.carrito) !== 0 ? renderCards() : <h2 className='text-center'>¡Aun no hay nada por aquí!<br />Agrega algun item y vuelve aquí para finalizar tu compra </h2>}
        <hr className='mt-4'/>
        {subTotal}
        <div className=' mt-5 col-12'>{bottonComprar}</div>
    </div>)
}
export default CartList;