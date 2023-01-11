/* Componente Botón de cabecera, posee un titulo y una opción para regresar atrás */
/* Importación de librerias */
import { Link } from "react-router-dom";
/* Importación de componenetes */
import Botton from "./Botton";
const BotonHeader=(props)=>{
    return(<>            
    <div className="col-12 mb-3">
    <div className="container-fluid">
        <div className="row">
            <div className="col-1 mt-2">
                <Link to={props.link}><Botton clase="fa-solid fa-angle-left fs-2" /></Link>
            </div>
            <div className="col-10 mt-2"><h3 className="text-center fs-2">{props.texto}</h3></div>
        </div>
    </div>
</div>
</>)
}

export default BotonHeader;