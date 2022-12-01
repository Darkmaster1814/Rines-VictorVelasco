/* Widget del carrito */
const Cart=({nombre, evento,flag})=>{
    return(
        <>
        <button className="btn-nav mt-4 me-md-5" onClick={evento}>
            {flag ? <i className="nav-i fa-sharp fa-solid fa-cart-arrow-down text-center"><p className="textHeader">{nombre}</p></i> : <i className="nav-i fa-sharp fa-solid fa-cart-plus text-center"><p className="textHeader">{nombre}</p></i>}
            
        </button>
        </>
    );
}
export default Cart;