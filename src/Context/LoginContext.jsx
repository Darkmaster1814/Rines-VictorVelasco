/* Contexto de Inicio de sesión, administra los usuarios logeados, agrega nuevos usuarios e indica si han iniciado sesión o no */
/* Importación e librería */
import { createContext } from "react";

let LoginContext = createContext({
    isLoggedin: false,
    onLogIn: () => { },
    onLogOut: () => { },
    usuarios: [],
    agregarNuevoUsuario: () => { },
    mail:null
});

export default LoginContext;