/* Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos */

import {collection, doc, getDoc, setDoc, where, query, deleteDoc, getDocs, snapshotEqual} from 'firebase/firestore'

const Collection="usuarios";

/* Obtener datos del usuario por email */
export const getUserByEmail=(db,email)=>{
    const documentReference=doc(db,Collection,email);
    return getDoc(documentReference)
    .then((data)=>{
        if(data.exists){
            return{
                email: data.email,
                ...data.data()
            }
        }
    })
}

/* registrar un nuevo documento de usuario en firebase */
export const setUserByEmail=(db,email,data)=>{
    return setDoc(doc(db,Collection,email),data)
    .then((data)=>{
        console.log("Información guardada",data);
    }).catch((error)=>{
        console.log("Error",error);
    })
}