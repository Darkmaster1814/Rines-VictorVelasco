import BottonClassic from "../Botones/BottonClassic";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
const FormularioIngresar=()=>{
    const ContextoLogin=useContext(LoginContext);//USar el context de login para acceder al array usuarios y sus metodos
    /* Ingresar */
    const ingresar=(event)=>{
        event.preventDefault();
        ContextoLogin.onLogIn(event.target[0].value,event.target[1].value);
        document.getElementById("Ingresar").reset();
    }
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
            <div className="checkbox mb-3">
                <label><input type="checkbox" /> Guardar Contraseña</label>
            </div>
            <div className="container-fluid mb-5"><div className="row"><div className="col-12">{!ContextoLogin.isLoggedin ? <BottonClassic type="submit" clase="container-fluid rounded bg-item" texto="LOG IN" /> :<BottonClassic evento={ContextoLogin.onLogOut} clase="container-fluid rounded bg-item" texto="LOG OUT"/>}</div></div></div>
        </form>)
    }
    return(<>{renderFormIngresar()}</>)
}

export default FormularioIngresar;