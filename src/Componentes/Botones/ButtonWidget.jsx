/* Componente de botón con widget, posee un icono en la parte superior y un texto en la parte inferior*/
const ButtonWidget = ({tipo,evento,nombre}) => {
    return (
        <>
            <button className="btn-nav mt-4 me-md-5" onClick={evento}>
                <i className={tipo}><p className="textHeader">{nombre}</p></i>
            </button>
        </>
    );
}
export default ButtonWidget;