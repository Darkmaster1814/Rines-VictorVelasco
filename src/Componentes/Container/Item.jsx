/* Componente e item de producto */
import { Link } from 'react-router-dom';//link para el routering
const Item = (props) => {
    return (
        <div className={props.columnas} id={props.producto.id}>
            <div className="card bg-container" style={{ width: "18rem" }}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img
                            className="card-img-top"
                            src={props?.producto?.imagen}
                            alt="Card image cap"
                        />
                    </div>
                    <Link to={"/item/" + props.producto.id}>
                        <button className="btn col-md-12" style={{ width: "18rem" }}>
                            <div className="card-body bg-nav rounded-3">
                                <h4 className="card-title">{props?.producto?.nombre}</h4>
                                <h5 className="card-text">${props?.producto?.precio}</h5>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
