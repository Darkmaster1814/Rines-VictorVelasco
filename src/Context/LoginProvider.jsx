/* Provider del Contexto de inicio de sesión, posee todas las funcionalidades para administrar el inicio de sesión como agregar un nuevo usuario, establecer un state para saber si el usuario ingresó o no y con ello controlar y mostrar información acorde dentro de la aplicación */
import { useState } from "react";
import { getFirestore } from 'firebase/firestore';//Importamos firebase para acceder y agregar la información de usuarios
/* Importación de Queries para consulta a db */
import { getUserByEmail, setUserByEmail } from "../Queries/usuarios";
/* Importación del contexto de inicio de sesión */
import loginContext from "./LoginContext";
/* Importación de componentes */
import { alertExito } from "../Componentes/Alerts/Alertas";

const Provider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);//Usuario registrado
    const [mail, setMail] = useState(null);//Para guardar el main del usuario logeado
    const [isLoggedin, setLoggedin] = useState(false);//Para setear al comienzo de la app como no logeado
    /* Indica si el usuario no esta globalmente en la app */
    const logoutHandler = () => {
        setLoggedin(false);
        setMail(null);
        setUsuarios([]);
        alertExito("Ha cerrado sesión");
    }
    /* Establece el usuario como logeado al ingresar un email, solo si firebase autentica con la contraseña*/
    const loginHandler = (email) => {
        /* Obtener datos del usuario por firebase */
        const db = getFirestore();
        setLoggedin(true);
        setMail(email);
        getUserByEmail(db, email).then((item) => {
            setUsuarios(item);//Agregar la información del usuario a traves de firebase y su email
            alertExito("Ha ingresado con el correo", email);
        })
    }
    /* Registrar un nuevo usuario */
    const addNewUser = (user) => {
        /* Si el carrito tiene item entonces actualiza la cantidad */
        /* Agregar usuario a firebase */
        const db = getFirestore();
        setUsuarios(user);//Set el valor de usuario
        setUserByEmail(db, user.email, user);//agregar nuevo documento de usuario por email como id
    }
    return (
        <loginContext.Provider value={{
            isLoggedin: isLoggedin,
            onLogIn: loginHandler,
            onLogOut: logoutHandler,
            usuarios: usuarios,
            agregarNuevoUsuario: addNewUser,
            mail: mail
        }}>
            {children}
        </loginContext.Provider>
    )
}

export default Provider;