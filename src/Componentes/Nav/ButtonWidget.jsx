/* Widget las opciones en el nav */
const ButtonWidget = (props) => {
    return (
        <>
            <button className="btn-nav mt-4 me-md-5" onClick={props.evento}>
                <i className={props.tipo}><p className="textHeader">{props.nombre}</p></i>
            </button>
        </>
    );
}
export default ButtonWidget;