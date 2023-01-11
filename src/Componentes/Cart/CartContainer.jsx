/* Componente contenedor de cards de articulos agregados al carrito */
/* Importación de componentes */
import CartDetails from "./CartDetails";
import BotonHeader from "../Botones/BottonHeader";
const CartContainer = () => {
    const renderContenedor = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <BotonHeader link="/" texto="Lista de compras" />
                    <div className="col-12">
                        <CartDetails />
                    </div>
                </div>
            </div>)
    }
    return (<>{renderContenedor()}</>)
}

export default CartContainer;