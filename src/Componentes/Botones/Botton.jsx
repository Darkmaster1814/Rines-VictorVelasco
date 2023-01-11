/* Componente de Botón, posee un icono sin texto */
const Botton = (props) => {
    return (
        <>
            <button className="btn" onClick={props.evento}>
                <i className={props.clase} />
            </button>
        </>
    );
}
export default Botton;