import BottonClassic from "../Botones/BottonClassic";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";//Ingresar con usuario in contraseña en firebase
import { useState } from "react";
const FormularioIngresar = () => {
    const ContextoLogin = useContext(LoginContext);//USar el context de login para acceder al array usuarios y sus metodos
    /* Ingresar */
    const [tooManyAtempts, setTooManyAtempts] = useState(false);//Si falla en ingresar muchas veces se torna true y cambia el boton para que sea olvide contraseña
    const ingresar = (event) => {
        event.preventDefault();
        const auth = getAuth();
        /* Si ha ingresado muchas veces envie el correo para reset de password de lo contrario ingrese con usuario y contraseña */
        if (tooManyAtempts) {
            sendPasswordResetEmail(auth,event.target[0].value)
                .then((user) => {
                    alert(`Por favor revisa la bandeja de entrada de ${event.target[0].value}`)
                    document.getElementById("Ingresar").reset();
                }).catch((error) => {
                    console.log(error)
                })
        }
        else {
            signInWithEmailAndPassword(auth, event.target[0].value, event.target[1].value)
                .then((useCredentials) => {
                    //Inicio sesión
                    console.log(useCredentials.user.email);
                    ContextoLogin.onLogIn(useCredentials.user.email);
                    document.getElementById("Ingresar").reset();
                }).catch((error) => {
                    console.log(error.code, error.message)
                    error.code === 'auth/wrong-password' && alert("Contraseña incorrecta");
                    error.code === 'auth/user-not-found' && alert("El email no existe registrelo para acceder");
                    error.code === 'auth/too-many-requests' && setTooManyAtempts(true);
                });
        }
    }
    /* función para enviar un correo electronico para resetar la contraseña desde firebase */



    /* Forms para ingresar */
    const renderFormIngresar = () => {
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
            <div className="container-fluid mb-5"><div className="row"><div className="col-12">{tooManyAtempts == false ? (!ContextoLogin.isLoggedin ? <BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="LOG IN" /> : <BottonClassic evento={ContextoLogin.onLogOut} clase="container-fluid rounded bg-item" texto="LOG OUT" />) : <BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="OLVIDE MI CONTRASEÑA" />}</div></div></div>
        </form>)
    }
    return (<>{renderFormIngresar()}</>)
}

export default FormularioIngresar;