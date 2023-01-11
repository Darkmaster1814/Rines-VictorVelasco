/*======================Item de conenedor para productos=================================================*/
/* Componente contenedor de articulos disponibles en el ecommerce  */
/* Importación de componentes */
import ItemList from './ItemList';
const ItemListContainer = () => {
    return (
        <div className="container-fluid bg-container">
                <ItemList/>
            </div>
    );
}

export default ItemListContainer;