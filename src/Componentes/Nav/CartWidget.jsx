/* Widget del carrito */
const Cart=({nombre, evento})=>{
    return(
        <>
        <button className="btn-nav mt-4 me-5" onClick={evento}>
            <i className="nav-i fa-sharp fa-solid fa-cart-arrow-down text-center"><p className="textHeader">{nombre}</p></i>
        </button>
        </>
    );
}
export default Cart;