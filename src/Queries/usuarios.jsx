/* Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos */
/* Importación de librerías */
import { doc, getDoc, setDoc } from 'firebase/firestore'

const Collection = "usuarios";//Nombre de la colección en firebase

/* Obtener datos del usuario por email */
export const getUserByEmail = async (db, email) => {
    const documentReference = doc(db, Collection, email);
    return await getDoc(documentReference)
        .then((data) => {
            if (data.exists) {
                return {
                    email: data.email,
                    ...data.data()
                }
            }
        })
}
/* registrar un nuevo documento de usuario en firebase */
export const setUserByEmail = async (db, email, data) => {
    return await setDoc(doc(db, Collection, email), data)
        .then((data) => {
        }).catch((error) => {
            console.log("Error", error);
        })
}