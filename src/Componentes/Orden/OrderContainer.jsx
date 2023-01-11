/*Componente contenedor de ordenes de compra finalizadas */
/* Importación de componentes */
import OrderList from "./OrderList";
import BotonHeader from "../Botones/BottonHeader";
const OrderContainer = () => {

    return (<>
        <div className="container-fluid">
            <div className="row">
                <BotonHeader link="/login" texto="Ordenes de compra" />
                <div className="col-12">
                    <OrderList />
                </div>
            </div>
        </div>
    </>)
}
export default OrderContainer;