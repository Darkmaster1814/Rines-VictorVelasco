/* Botones para todos los componentes y widgets */
const Botton = (props) => {
    return (
        <>
            <button className="btn" onClick={props.evento}>
            <i className={props.clase}/>
            </button>
        </>
    );
}
export default Botton;