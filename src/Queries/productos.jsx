/* Querys para acceder editar y modificar productos desde firebase */

import {collection, doc, getDoc, setDoc, where, query, deleteDoc, getDocs, snapshotEqual} from 'firebase/firestore'

const Collection="productos";

/* Query obtener todos los productos de la collection */
export const getAllProducts=(db)=>{
    const collectionReference= collection(db, Collection);
    return getDocs(collectionReference)
    .then((snapshot)=>{
        const products=[];
        snapshot?.docs?.forEach((item)=>{
            products.push({
                id: item.id,
                ...item.data()})/* Para crear un array de objetos traidos con la info de firebase */ 
        })
        return products;
    }).catch((error)=>{
        return error;
    })
}

/* Obtener producto por id */

export const getProductById=(db,id)=>{
    const collectionReference= doc(db,Collection,id);/* Obtener la referencia el documento por id */
    /* obtener el documento con la referencia */
    return getDoc(collectionReference)
    .then((item)=>{
        if(item.exists){
            return{
                id:item.id,
                ...item.data()
            }
        }
    })
}

/* Obtener productos por categoria */
export const getProductsByCategory=(db,category)=>{
    /* Obtener la referencia de los documentos que cumplan la query */
    const collectionReference=query(
        collection(db, Collection),
        where('categoria','==',category)
    )/* Obtener la collection de documentos que cumplen con la query */
    return getDocs(collectionReference)
    .then((snapshot)=>{
        const products=[];
        snapshot?.docs?.forEach((item)=>{
            products.push({
                id: item.id,
                ...item.data()
            })
        })
        return products;
    })
    .catch((error)=>{
        return error;
    })
}
