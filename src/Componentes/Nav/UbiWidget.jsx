/* Widget del ubicacion */
const Ubicacion = ({ nombre, evento }) => {
    return (
        <>
            <button className="btn-nav mt-4 me-5" onClick={evento}>
                <i className="nav-i fa-solid fa-location-dot text-center"><p className="textHeader">{nombre}</p></i>
            </button>
        </>
    );
}
export default Ubicacion;