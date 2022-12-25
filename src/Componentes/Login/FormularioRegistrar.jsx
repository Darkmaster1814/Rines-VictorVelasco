import BottonClassic from "../Botones/BottonClassic";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
const FormularioRegistrar=()=>{
    const ContextoLogin=useContext(LoginContext);
    /* Clase constructora para el objeto de usuario */
    class Usuario{
        constructor(...user){
            this.email=user[0];
            this.password=user[1];
            this.nombre=user[2];
            this.apellido=user[3];
            this.direccion=user[4];
            this.ciudad=user[5];
            this.pais=user[6]
            this.cp=user[7];
            this.telefono=user[8];
        }
    }
    const registrar=(event)=>{
        event.preventDefault()
        ContextoLogin.agregarNuevoUsuario(new Usuario(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value, event.target[4].value, event.target[5].value, event.target[6].value, event.target[7].value, event.target[8].value));
        document.getElementById("Registrar").reset();
    }
    const renderFormRegistrar = () => {
            /* Form para registrarse */
        return (<form onSubmit={registrar} id="Registrar">
            <div className="form-group mt-4 mb-4">
                <input type="email" name="email" className="form-control border-0 mb-0" id="email" placeholder="Email*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="password" name="password" className="form-control border-0 mb-0" id="pwd" placeholder="Password*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="nombre" className="form-control border-0 mb-0" id="nombre" placeholder="Nombre*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="apellido" className="form-control border-0 mb-0" id="apellido" placeholder="Apellido*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="direccion" className="form-control border-0 mb-0" id="direccion" placeholder="Dirección*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="ciudad" className="form-control border-0 mb-0" id="ciudad" placeholder="Ciudad*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="pais" className="form-control border-0 mb-0" id="pais" placeholder="País*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="cp" className="form-control border-0 mb-0" id="cp" placeholder="Codigo postal*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" name="telefono" className="form-control border-0 mb-0" id="telefono" placeholder="Teléfono*" required />
                <hr className="mt-0" />
            </div>
            <div className="container-fluid mt-5 mb-5"><div className="row"><div className="col-12"><BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="GUARDAR" /></div></div></div>
        </form>)
    }
    return(<>{renderFormRegistrar()}</>)
}

export default FormularioRegistrar;