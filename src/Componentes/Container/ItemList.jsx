import Item from "./Item"
const ItemList = (props) => {
    const renderCards=()=>{
        return (props.productos?.map((item)=><Item id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} columnas={props.columnas}/>));
    }

    return (<div className="row">{renderCards()}</div>);
}

export default ItemList;