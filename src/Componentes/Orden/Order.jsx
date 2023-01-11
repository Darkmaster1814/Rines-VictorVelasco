/* Componente de card de orden de compra, despliega el detalle de cada orden de compra */
const Order = (props) => {
    /* Renderizado de los articulos comprados  */
    const renderArticulos = () => {
        return (props.carrito.map((item) => <div key={item.id}><p>{item.nombre} Cantidad: {item.cantidad}</p></div>))
    }
    return (
        <div className="card ms-2">
            <h5>Número de Orden </h5><p>{props.id}</p>
            <h5>Fecha </h5><p>{props.fecha}</p>
            <h5>Pedido</h5>{renderArticulos()}
            <h5>Total </h5><p>${props.total}</p>
            <h5>Estatus </h5><p>{props.estatus}</p>
            <hr />
        </div>
    )
}

export default Order;