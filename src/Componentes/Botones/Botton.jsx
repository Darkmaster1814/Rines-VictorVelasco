/* Componente de Botón, posee un icono sin texto */
const Botton = ({evento,clase}) => {
    return (
        <>
            <button className="btn" onClick={evento}>
                <i className={clase} />
            </button>
        </>
    );
}
export default Botton;