const Item = (props) => {
    return (
        <div className={props.columnas} id={props.id}>
        <div className="card bg-container" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={props?.imagen}
                alt="Card image cap"
            />
            <button className="btn">
            <div className="card-body bg-nav rounded-3">
                <div className="container-fluid">
                            <h4 className="card-title">{props?.nombre}</h4>
                            <h5 className="card-text">${props?.precio}</h5>
                            {/* <a className="bg-cart-item btn d-flex justify-content-end"> </a>*/}
        
                </div>
            </div>
            </button>
        </div>
        </div>
    );
};

export default Item;
