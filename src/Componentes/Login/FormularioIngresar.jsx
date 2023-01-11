/* Componente de formulario para ingresar a la aplicación con usuario email, contraseña */
/* Importación de librerias */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";//Ingresar con usuario in contraseña en firebase
/* Importación del contexto */
import LoginContext from "../../Context/LoginContext";
/* Importación de componentes */
import { alertExito, alertFracaso } from "../Alerts/Alertas";
import BottonClassic from "../Botones/BottonClassic";
const FormularioIngresar = () => {
    const ContextoLogin = useContext(LoginContext);//Usar el context de login para acceder al la DB de usuarios y sus metodos
    const [tooManyAtempts, setTooManyAtempts] = useState(false);//Si falla en ingresar muchas veces cambia a true y cambia el boton para que sea  diga olvide contraseña y te ayude a resetarla
    /* Función para registrar los datos del formulario de ingresar */
    const ingresar = (event) => {
        event.preventDefault();
        const auth = getAuth();
        /* Si ha ingresado muchas veces envie el correo para reset de password de lo contrario ingrese con usuario y contraseña */
        if (tooManyAtempts) {
            /* función para enviar un correo electronico para resetar la contraseña desde firebase */
            sendPasswordResetEmail(auth, event.target[0].value)
                .then((user) => {
                    alertExito(`Revisa la bandeja de entrada de ${event.target[0].value}`)
                    document.getElementById("Ingresar").reset();
                }).catch((error) => {
                    console.log(error)
                })
        }
        else {
            signInWithEmailAndPassword(auth, event.target[0].value, event.target[1].value)
                .then((useCredentials) => {
                    //Inicio sesión
                    ContextoLogin.onLogIn(useCredentials.user.email);
                    document.getElementById("Ingresar").reset();
                }).catch((error) => {
                    console.log(error.code, error.message)
                    error.code === 'auth/wrong-password' && alertFracaso("Contraseña incorrecta");
                    error.code === 'auth/user-not-found' && alertFracaso("El email no existe registrelo para acceder");
                    error.code === 'auth/too-many-requests' && setTooManyAtempts(true);//Cambia el valor a true si se equivocó muchas veces al ingrear la contraseña
                });
        }
    }
    /* Boton dinamico de registro
    ->Si ha ingresado muchas veces activa el boton de olvide contraseña para resetar usando el servicio de auth de firebase
    ->Si no ha ingresado activa el boton para iniciar sesión
    ->Si ha iniciado sesión activa dos botones uno para cerrar sesión y otro para ver las ordenes de compra completas  */
    const renderBottonRegistrar = () => {
        if (tooManyAtempts === false) {
            if (!ContextoLogin.isLoggedin) {
                return <BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="LOG IN" />
            }
            else {
                return (<div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mt-2">
                            <BottonClassic evento={ContextoLogin.onLogOut} clase="container-fluid rounded bg-item" texto="LOG OUT" />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-2">
                            <Link to='/cart/order'><BottonClassic clase="container-fluid rounded bg-item" texto="COMPRAS" /></Link>
                        </div>
                    </div>
                </div>)
            }
        }
        else {
            return<BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="OLVIDE MI CONTRASEÑA" />
        }
    }
    /* Formulario para iniciar sesión el la aplicación */
    const renderFormularioInciarSesion = () => {
        return (<form onSubmit={ingresar} id="Ingresar">
            <div className="form-group mt-4 mb-4">
                <input type="email" name="email" className="form-control border-0 mb-0" id="email" placeholder="Email" required />
                <hr className="mt-0" />
            </div>
            <br />
            <div className="form-group mt-4 mb-5">
                <input type="password" name="password" className="form-control border-0 mb-0" id="pwd" placeholder="Password" required />
                <hr className="mt-0" />
            </div>
            <div className="container-fluid mb-5"><div className="row"><div className="col-12">{renderBottonRegistrar()}</div></div></div>
        </form>)
    }
    return (<>{renderFormularioInciarSesion()}</>)
}

export default FormularioIngresar;