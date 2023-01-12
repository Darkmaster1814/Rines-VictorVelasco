/* Compoenente de Spinner para mostrar durante las consultas al servidor (cargando...) */
const Loader = ({columnas}) => {
    return (
        <div className="text-center">
            <img className={columnas} src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-11.gif" alt="loader" />
        </div>)
}

export default Loader;