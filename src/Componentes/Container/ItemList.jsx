import Item from "./Item"
const ItemList = (props) => {
    const renderCards=()=>{/* condicional de render para ir cargando cada sección de busqueda */
        return (props.productos?.map((item)=><Item id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} columnas={props.columnas}/>));
    }
    
/* se va ir renderizando diferentes cards */
    return (<div className="row">{renderCards()}</div>);
}

export default ItemList;