/* Componente de detalles de producto */
import ItemCount from "./ItemCount";
import BottonClassic from "../Botones/BottonClassic";
import { Link } from 'react-router-dom';//libreria de link para las rutas
const ItemDetail = (props) => {
    return (
        <div className="row">
            <div className="col-md-5 text-center mt-3"><img src={props.producto?.imagen} alt="producto" className="rounded w-100" /></div>
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-12 mt-4"><h1 className="text-left">{props.producto?.nombre}</h1></div>
                    <div className="col-md-12 "><h3 className="text-left">${props.producto?.precio}.00</h3></div>
                    <div className="col-md-11 mt-4 mb-4"><p className="text-justify">{props.producto?.descripcion}</p></div>
                    <hr />
                    {<ItemCount producto={props?.producto} />}
                    <div className="col-md-7"><Link to='/cart'><BottonClassic clase="container-fluid rounded bg-item" texto="COMPRAR"/></Link></div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;