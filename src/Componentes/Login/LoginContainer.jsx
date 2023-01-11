/* Componente contenedor de Inicio de sesión y registro para nuevos usuarios */
/* Importación de librerías */
import { Link } from "react-router-dom";
import { useState } from "react";
/* Importación de componentes */
import Botton from "../Botones/Botton";
import BottonClassic from "../Botones/BottonClassic";
import FormularioIngresar from "./FormularioIngresar";
import FormularioRegistrar from "./FormularioRegistrar";

const LoginContainer = () => {
    /* State para hacer un render condicional para mostrar un formulario de ingresar o de registrar segun se oprima */
    const [typeForm, setTypeForm] = useState(true);//true:Ingresar false:Registrar

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Link to="/"><Botton clase="fa-solid fa-angle-left fs-2" /></Link>
                </div>
                <div className="col-12 mb-2"><h2 className="text-center mt-4 fs-2"><Botton clase="fa-solid fa-right-to-bracket me-4 fs-1" />Mi Cuenta</h2></div>
                <div className="col-12"> <div className="container-fluid"><div className="row"><div className="col-8 mx-auto bg-container"><div className="container-fluid p-0 m-1"><div className="row"><div className="col-6"><BottonClassic clase="container-fluid rounded bg-item border-0" texto="Ingresa" evento={() => { setTypeForm(true) }} /></div><div className="col-6"><BottonClassic clase="container-fluid rounded bg-container border-0" texto="Registrate" evento={() => { setTypeForm(false) }} /></div></div></div></div></div></div></div>
            </div>
            <br />
            <br />
            <div className="col-12"> <div className="container-fluid"><div className="row"><div className="col-7 mx-auto">{typeForm ? <FormularioIngresar/> : <FormularioRegistrar/>}</div></div></div></div>
        </div>)
}
export default LoginContainer;