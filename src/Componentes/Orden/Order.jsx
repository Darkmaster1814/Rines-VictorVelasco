/* Componente de card de orden de compra, despliega el detalle de cada orden de compra */
const Order = ({carrito, id, fecha, total, estatus}) => {
    /* Renderizado de los articulos comprados  */
    const renderArticulos = () => {
        return (carrito.map((item) => <div key={item.id}><p>{item.nombre} Cantidad: {item.cantidad}</p></div>))
    }
    return (
        <div className="card ms-2">
            <h5>Número de Orden </h5><p>{id}</p>
            <h5>Fecha </h5><p>{fecha}</p>
            <h5>Pedido</h5>{renderArticulos()}
            <h5>Total </h5><p>${total}</p>
            <h5>Estatus </h5><p>{estatus}</p>
            <hr />
        </div>
    )
}

export default Order;