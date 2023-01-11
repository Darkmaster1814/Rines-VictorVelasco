/* Formulario para registrar un nuevo usuario a la aplicación */
/* Importación de librerias */
import { useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";//Modulo de autenticacion firebase
/* Importación de contexto */
import LoginContext from "../../Context/LoginContext";
/* Importación de componentes */
import BottonClassic from "../Botones/BottonClassic";
import { alertExito, alertFracaso } from "../Alerts/Alertas";

const FormularioRegistrar=()=>{
    const ContextoLogin=useContext(LoginContext);//Contexto de autenticación para acceder a funciones para registrar el la db y funcionalidades del contexto
    /* Función para registrar los valores dados en el formulario  */
    const registrar=(event)=>{
        event.preventDefault()
        const auth=getAuth();
        /* Crear un nuevo usuario usando firebase con el query, se usa el email como id */
        createUserWithEmailAndPassword(auth,event.target[0].value,event.target[1].value)
        .then((userCredential)=>{
            /* Inició sesion y uso de función para agregar usuario nuevo a partir del contexto */
        ContextoLogin.agregarNuevoUsuario({
            "email": event.target[0].value,
            "nombre": event.target[2].value,
            "apellido":event.target[3].value,
            "direccion":event.target[4].value,
            "ciudad":event.target[5].value,
            "pais":event.target[6].value,
            "cp": event.target[7].value,
            "telefono":event.target[8].value,
        });
        document.getElementById("Registrar").reset();//Reset al formulario
            alertExito(`${userCredential.user.email} registrado con éxito`);
        }).catch((error)=>{
            console.log(error.code,error.message);
            alertFracaso(`${error.message}`); 
        })
    }

    const renderFormularioRegistrarNuevoUsuario = () => {
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
    return(<>{renderFormularioRegistrarNuevoUsuario()}</>)
}

export default FormularioRegistrar;