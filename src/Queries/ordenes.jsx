/* Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos */
/* Importación de librerías */
import { doc, getDocs, setDoc, collection, query, where } from 'firebase/firestore';
/* Importación de componentes */
import { alertExito, alertFracaso } from '../Componentes/Alerts/Alertas';

const Collection = "ordenes";//Nombre de la colección de firebase

/* Obtener productos por categoria */
export const getOrdersByUserId = async (db, email) => {
    /* Obtener la referencia de los documentos que cumplan la query */
    const collectionReference = query(
        collection(db, Collection),
        where('usuario', '==', email)
    )/* Obtener la collection de documentos que cumplen con la query */
    return await getDocs(collectionReference)
        .then((snapshot) => {
            const orders = [];
            snapshot?.docs?.forEach((item) => {
                orders.push({
                    id: item.id,
                    ...item.data()
                })
            })
            return orders;
        })
        .catch((error) => {
            return error;
        })
}

/* registrar una nueva orden de compra*/
export const setOrders = async (db, email, date, data) => {
    let id = email + "_" + date;
    return await setDoc(doc(db, Collection, id), data)
        .then((data) => {
            alertExito(`Orden de compra N.${id} generada con éxito`);
        }).catch((error) => {
            alertFracaso("Ha ocurrido un error");
            console.log("Error", error);
        })
}