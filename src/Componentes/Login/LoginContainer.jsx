import Botton from "../Botones/Botton";
import BottonClassic from "../Botones/BottonClassic";
import { Link } from "react-router-dom";
import { useState } from "react";
/* Contenedor de la categoria de iniciar sesión */
const LoginContainer = () => {
    /* State para hacer un render condicional para mostrar un formulario de ingresar o de registrar segun se oprima */
    const [typeForm, setTypeForm] = useState(true);//true:Ingresar false:Registrar
    /* Forms para ingresar */
    const renderFormIngresar = () => {
        return (<form onSubmit={() => { }}>
            <div className="form-group mt-4 mb-4">
                <input type="email" className="form-control border-0 mb-0" id="email" placeholder="Email" required />
                <hr className="mt-0" />
            </div>
            <br />
            <div className="form-group mt-4 mb-5">
                <input type="password" className="form-control border-0 mb-0" id="pwd" placeholder="Password" required />
                <hr className="mt-0" />
            </div>
            <div className="checkbox mb-3">
                <label><input type="checkbox" /> Guardar Contraseña</label>
            </div>
            <div className="container-fluid mb-5"><div className="row"><div className="col-12"><BottonClassic clase="container-fluid rounded bg-item" texto="LOG IN" /></div></div></div>

        </form>)
    }
    const renderFormRegistrar = () => {
        return (<form onSubmit={() => { }}>
            <div className="form-group mt-4 mb-4">
                <input type="email" className="form-control border-0 mb-0" id="email" placeholder="Email*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="password" className="form-control border-0 mb-0" id="pwd" placeholder="Password*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="nombre" placeholder="Nombre*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="apellido" placeholder="Apellido*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="direccion" placeholder="Dirección*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="ciudad" placeholder="Ciudad*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="cp" placeholder="Codigo postal*" required />
                <hr className="mt-0" />
            </div>
            <div className="form-group mb-4">
                <input type="text" className="form-control border-0 mb-0" id="telefono" placeholder="Teléfono*" required />
                <hr className="mt-0" />
            </div>
            <div className="container-fluid MT-5 mb-5"><div className="row"><div className="col-12"><BottonClassic clase="container-fluid rounded bg-item" texto="GUARDAR" /></div></div></div>
        </form>)
    }
    /* Form para registrarse */

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Link to="/"><Botton clase="fa-solid fa-angle-left fs-2" /></Link>
                </div>
                <div className="col-12 mb-2"><h2 className="text-center mt-4 fs-2"><Botton clase="fa-solid fa-right-to-bracket me-4 fs-1" />Mi Cuenta</h2></div>
                <div className="col-12"> <div className="container-fluid"><div className="row"><div className="col-7 mx-auto bg-container"><div className="container-fluid p-0 m-1"><div className="row"><div className="col-6"><BottonClassic clase="container-fluid rounded bg-item border-0 fs-5" texto="Ingresa" evento={() => { setTypeForm(true) }} /></div><div className="col-6"><BottonClassic clase="container-fluid rounded bg-container border-0 fs-5" texto="Registrate" evento={() => { setTypeForm(false) }} /></div></div></div></div></div></div></div>
            </div>
            <br />
            <br />
            <div className="col-12"> <div className="container-fluid"><div className="row"><div className="col-7 mx-auto">{typeForm ? renderFormIngresar() : renderFormRegistrar()}</div></div></div></div>
        </div>)
}
export default LoginContainer;