import Order from "./Order";
/* Listado de componentes para la orden de compra */
const OrderList=(props)=>{
    const renderCards=()=>{
        return (props.carrito.map((item) => <Order producto={item}/>))
    }
    return(<div className="m-3">{renderCards()}</div>)
}

export default OrderList;