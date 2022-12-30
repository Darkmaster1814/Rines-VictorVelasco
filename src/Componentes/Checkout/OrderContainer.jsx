import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../Context/CartContext";
import Botton from "../Botones/Botton";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
/* Contenedor de orden de compra */
const OrderContainer = () => {
    const ContextoCarrito =useContext(cartContext);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1 mt-2">
                    <Link to="/cart"><Botton clase="fa-solid fa-angle-left fs-2" /></Link>
                </div>
                <div className="col-10 mt-2 mb-4"><h3 className="text-center fs-2">Solicitud de compra</h3></div>
                <div className="col-md-5 col-sm-12 m-4">
                <OrderList carrito={ContextoCarrito.carrito}/>
                </div>
                <div className="col-md-6  col-sm-12">
                <OrderDetails/>
                </div>
            </div>
        </div>)
}

export default OrderContainer;
