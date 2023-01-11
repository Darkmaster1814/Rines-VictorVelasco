/* Listado de articulos para la orden de compra */
/* Importación de componentes */
import Brief from "./Brief";
const BriefList = (props) => {
    const renderCards = () => {
        return (<div className="m-3">{props.carrito.map((item) => <div key={item.id}><Brief producto={item} /></div>)}</div>)
    }
    return (<>{renderCards()}</>)
}

export default BriefList;