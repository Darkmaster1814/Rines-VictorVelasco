/* Card de cada articulo del carrito dentro del preview de orden de compra sin imagen */
const Brief=(props)=>{
        /* Render de cada card del carrito */
        const renderCard = () => {
            return (<div className='card mt-2 mb-2' key={props.producto.id}>
                <div className='row'>
                    <div className='col-12'>
                        <h5>{props.producto.nombre}</h5>
                        <p className="mt-2">{props.producto.cantidad} PZ</p>
                        <p className="mb-5"><strong>$ {parseFloat(props.producto.precio) * parseInt(props.producto.cantidad)}</strong></p>
                    </div>
                    <hr className="mt-2"/>
                </div>
            </div>)
        }
    
    return(<>{renderCard()}</>)
}

export default Brief;