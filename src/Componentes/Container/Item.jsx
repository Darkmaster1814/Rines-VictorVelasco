/* Importacion de imagenes */
import imagenProducto from "../../Imagenes/volante.svg";
const Item = (props) => {
    return (
        <div className="d-inline-flex p-3">
        <div className="card " style={{ width: "18rem" }}>
            <img
                className="card-img-top bg-container"
                src={imagenProducto}
                alt="Card image cap"
            />
            <div className="card-body bg-nav rounded-4">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h5 className="card-title">{props.nombre}</h5>
                            <p className="card-text">{props.precio}</p>
                        </div>
                        <div className="col-3">
                            <a className="bg-cart-item btn d-flex justify-content-end">
                                <i className="fa-solid fa-cart-arrow-down fs-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Item;
