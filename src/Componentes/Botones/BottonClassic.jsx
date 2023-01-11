/* Componente de botón tradicional sin relleno y texto en el centro */
const BottonClassic = (props) => {
    return (
        <button type={props.type} className={props.clase} onClick={props.evento}><p className="m-2">{props.texto}</p></button>
    )
}
export default BottonClassic;