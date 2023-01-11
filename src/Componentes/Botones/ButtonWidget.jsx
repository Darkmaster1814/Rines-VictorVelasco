/* Componente de botón con widget, posee un icono en la parte superior y un texto en la parte inferior*/
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