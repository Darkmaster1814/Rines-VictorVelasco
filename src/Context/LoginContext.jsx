import { createContext } from "react";

let LoginContext = createContext({
    isLoggedin: false,
    onLogIn: () => { },
    onLogOut: () => { },
    usuarios: [],
    obtenerUsuarioPorEmail: () => { },
    agregarNuevoUsuario: () => { },
    mail:null
});

export default LoginContext;