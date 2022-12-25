import { useState } from "react";
import loginContext from "./LoginContext";

const Provider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);//Arreglo de usuarios registrados
    const [mail,setMail]=useState(null);//Para guardar el main del usuario logeado
    const [isLoggedin, setLoggedin] = useState(false);//Para setear al comienzo de la app como no logeado
    /* El usuario esta logeado globalmente el la app */
    const logoutHandler=()=>{
        setLoggedin(false);
        setMail(null);
        alert("Ha cerrado sesión");
    }
    /* El usuario a cerrado sesión */
    const loginHandler=(email,password)=>{
        if(isInUsers(email)){
            if(getUserByEmail(email).password===password)
            {
                setLoggedin(true);
                setMail(email);
                alert("Ha ingresado con el correo",email);
            }
            else{
                alert("Contraseña incorrecta");
            }
        }
        else{
            alert("El usuario no existe registrate para acceder")
        }
    }
    /* Obtener el usuario por un email */
    const getUserByEmail = (emailUser) => {
        let index = usuarios.findIndex((usuario) => usuario.email === emailUser);
        return usuarios[index];
    }
    /* saber si un email forma parte del arreglo de usuarios */
    const isInUsers = (emailUser) => {
        return (usuarios.some((usuario) => usuario.email === emailUser));
    }
    /* Registrar un nuevo usuario */
    const addNewUser = (user) => {
        /* Si el carrito tiene item entonces actualiza la cantidad */
        if (isInUsers(user.email)) {
            usuarios.forEach((usuario) => {
                if (usuario.email === user.email) {
                    alert("El usuario ya existe")
                }
            });
        }
        else {
            setUsuarios((items) => [...items, user]);//Agrega al array de usuarios un nuevo usuario si no existe
            alert("Usuario agregado")
        }
    }
    return(
        <loginContext.Provider value={{
            isLoggedin:isLoggedin,
            onLogIn: loginHandler,
            onLogOut: logoutHandler,
            usuarios:usuarios,
            obtenerUsuarioPorEmail:getUserByEmail,
            agregarNuevoUsuario:addNewUser,
            mail:mail
        }}>
            {children}
        </loginContext.Provider>
    )
}

export default Provider;

