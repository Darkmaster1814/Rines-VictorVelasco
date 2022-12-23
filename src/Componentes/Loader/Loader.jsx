/* Spinner de cargando */
const Loader=(props)=>{
    return(
        <div className="text-center">
    <img className={props.columnas} src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-11.gif" alt="loader" />
    </div>)
}

export default Loader;