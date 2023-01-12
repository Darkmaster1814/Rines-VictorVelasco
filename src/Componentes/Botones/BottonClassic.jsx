/* Componente de botón tradicional sin relleno y texto en el centro */
const BottonClassic = ({type,clase,evento,texto}) => {
    return (
        <button type={type} className={clase} onClick={evento}><p className="m-2">{texto}</p></button>
    )
}
export default BottonClassic;