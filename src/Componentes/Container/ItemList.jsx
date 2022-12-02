import Item from "./Item"
const ItemList = (props) => {
    const renderCards=()=>{/* condicional de render para ir cargando cada sección de busqueda */
        return (props.productos?.map((item)=><Item producto={item} columnas={props.columnas}/>));
    }
    
/* se va ir renderizando diferentes cards */
    return (<div className="row">{renderCards()}</div>);
}

export default ItemList;