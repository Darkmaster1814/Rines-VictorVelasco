/* Componente de cada card de articulos en el catalogo de productos */
/* Importación de librerías */
import { Link } from 'react-router-dom';//link para el routering
const Item = ({producto}) => {
    /* Render de las card de cada producto en el catalogo de la db de firebase */
    const renderCards = () => {
        return (<div className="card bg-container" style={{ width: "18rem" }}>
            <div className="row">
                <div className="col-md-12 text-center">
                    <img
                        className="card-img-top"
                        src={producto?.imagen}
                        alt="producto imagen"
                    />
                </div>
                <Link to={`/item/${producto.id}`}>
                    <button className="btn col-md-12" style={{ width: "18rem" }}>
                        <div className="card-body bg-nav rounded-3">
                            <h4 className="card-title">{producto?.nombre}</h4>
                            <h5 className="card-text">${producto?.precio}</h5>
                        </div>
                    </button>
                </Link>
            </div>
        </div>)
    }

    return (<>{renderCards()}</>);
};

export default Item;
