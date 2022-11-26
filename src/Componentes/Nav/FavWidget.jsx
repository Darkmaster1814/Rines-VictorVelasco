/* Widget del favoritos */
const Favoritos = ({ nombre, evento }) => {
    return (
        <>
            <button className="btn-nav mt-4 me-5" onClick={evento}>
                <i className=" nav-i fa-sharp fa-solid fa-heart-circle-plus text-center"><p className="textHeader">{nombre}</p></i>
            </button>
        </>
    );
}
export default Favoritos;