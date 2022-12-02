import ItemCount from "./ItemCount";
const ItemDetail=(props)=>{
    return(
        <div className="row">
            <div className="col-md-5 text-center mt-3"><img src={props.producto?.imagen} alt="producto" className="rounded w-100" /></div>
            <div className="col-md-7">
                <div className="row">
                <div className="col-md-12 mt-4"><h1 className="text-left">{props.producto?.nombre}</h1></div>
                <div className="col-md-12 "><h3 className="text-left">${props.producto?.precio}.00</h3></div>
                <div className="col-md-11 mt-4 mb-4"><p className="text-justify">{props.producto?.descripcion}</p></div>
                <hr />
                {<ItemCount cantidad={props.producto?.cantidad}/>}
                </div>
            </div>
            
        </div>
    )
}
export default ItemDetail;