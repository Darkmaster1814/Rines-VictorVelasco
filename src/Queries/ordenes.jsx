/* Query para guardar ordenes de compra  */
/* Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos */

import {collection, doc, getDoc, setDoc, where, query, deleteDoc, getDocs, snapshotEqual} from 'firebase/firestore'

const Collection="ordenes";

/* Obtener datos de ordenes de compra*/
export const getOrdersById=(db,id)=>{
    const documentReference=doc(db,Collection,id);
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

/* registrar una nueva orden de compra*/
export const setOrders=(db,email,date,data)=>{
    let id=email+"_"+date;
    return setDoc(doc(db,Collection,id),data)
    .then((data)=>{
        console.log("Compra Exitosa, Muchas gracias!",data);
    }).catch((error)=>{
        console.log("Error",error);
    })
}