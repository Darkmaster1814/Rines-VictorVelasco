/*======================Item de conenedor para productos=================================================*/
import ItemList from './ItemList';
const ItemListContainer = () => {

    return (
        <div className="container-fluid bg-container">
            <div className='row'>
                <ItemList columnas="col-md-5 col-lg-3 mt-5" />
            </div>
        </div>
    );
}

export default ItemListContainer;