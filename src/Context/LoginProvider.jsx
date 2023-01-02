import { useState } from "react";
import loginContext from "./LoginContext";
import { getFirestore } from 'firebase/firestore';//Importamos firebase para acceder y agregar la información de usuarios
import { getUserByEmail, setUserByEmail } from "../Queries/usuarios";
const Provider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);//Usuario registrado
    const [mail,setMail]=useState(null);//Para guardar el main del usuario logeado
    const [isLoggedin, setLoggedin] = useState(false);//Para setear al comienzo de la app como no logeado
    /* El usuario esta logeado globalmente el la app */
    const logoutHandler=()=>{
        setLoggedin(false);
        setMail(null);
        setUsuarios([]);
        alert("Ha cerrado sesión");
    }
    /* El usuario a cerrado sesión */
    const loginHandler=(email)=>{
        /* Obtener datos del usuario por firebase */
                const db=getFirestore();
                setLoggedin(true);
                setMail(email);
                getUserByEmail(db,email).then((item)=>{
                    setUsuarios(item);//Agregar la información del usuario a traves de firebase y su email
                    alert("Ha ingresado con el correo",email);
                })
    }
    /* Registrar un nuevo usuario */
    const addNewUser = (user) => {
        /* Si el carrito tiene item entonces actualiza la cantidad */
            /* Agregar usuario a firebase */
            const db=getFirestore();
            setUsuarios(user);//Set el valor de usuario
            setUserByEmail(db,user.email,user);//agregar nuevo documento de usuario por email como id
    }
    return(
        <loginContext.Provider value={{
            isLoggedin:isLoggedin,
            onLogIn: loginHandler,
            onLogOut: logoutHandler,
            usuarios:usuarios,
            agregarNuevoUsuario:addNewUser,
            mail:mail
        }}>
            {children}
        </loginContext.Provider>
    )
}

export default Provider;

