/* Componente contenedor de Checkout, muestra un preview de la orden de compra, contiene los detalles de compra(detalles del cliente) y la lista de productos que se van a comprar */
/* Importación de las librerias */
import { useContext } from "react";
/* Importación de los contextos */
import cartContext from "../../Context/CartContext";
/* Importación de los componentes */
import BotonHeader from "../Botones/BottonHeader";
import BriefDetails from "./BriefDetails";
import BriefList from "./BriefList";
/* Contenedor de orden de compra */
const BriefContainer = () => {
    const ContextoCarrito = useContext(cartContext);
    return (<div className="container-fluid">
        <div className="row">
            <BotonHeader link="/cart" texto="Solicitud de compra" />
            <div className="col-md-5 col-sm-12 m-4">
                <BriefList carrito={ContextoCarrito.carrito} />
            </div>
            <div className="col-md-6  col-sm-12">
                <BriefDetails />
            </div>
        </div>
    </div>)
}

export default BriefContainer;