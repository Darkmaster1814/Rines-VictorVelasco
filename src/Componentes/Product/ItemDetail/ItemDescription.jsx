/* Componente de detalles del producto seleccionado*/
import ItemQuantitySelector from "./ItemQuantitySelector";
import BotonHeader from "../../Botones/BottonHeader";
const ItemDescription = (props) => {
    /* Render de failure en caso de que el id no concuerde con ninguno de firebase */
    const renderFailure=()=>{
        return(<div className="row">
<BotonHeader link="/" texto="Detalles del producto" />
<h5 className="text-center">El producto buscado no existe :(</h5>
<img  className="col-md-8 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/pistonsf1.appspot.com/o/unnamed.png?alt=media&token=b9005b81-dc9f-4d80-b3ed-6afbbc6b103b" alt="error" />
        </div>)
    }
    /* Render de detalles e información del producto seleccionado */
    const renderDetails = () => {
        return (<div className="row">
            <BotonHeader link="/" texto="Detalles del producto" />
            <div className="col-md-5 text-center mt-3"><img src={props.producto?.imagen} alt="producto" className="rounded w-100" /></div>
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-12 mt-4"><h1 className="text-left">{props.producto?.nombre}</h1></div>
                    <div className="col-md-12 "><h3 className="text-left">${props.producto?.precio}.00</h3></div>
                    <div className="col-md-11 mt-4 mb-4"><p className="text-justify">{props.producto?.descripcion}</p></div>
                    <hr />
                    {<ItemQuantitySelector producto={props?.producto} />}
                </div>
            </div>
        </div>)
    }
    return (<>{props.producto.nombre=== undefined ? renderFailure():renderDetails()}</>)
}
export default ItemDescription;