/* Querys para acceder editar y modificar productos desde firebase */

import {collection, doc, getDoc, setDoc, where, query, deleteDoc, getDocs, snapshotEqual} from 'firebase/firestore'

const Collection="productos";

/* Query obtener todos los productos de la collection */
export const getAllProducts= async(db)=>{
    const collectionReference= collection(db, Collection);
    return await getDocs(collectionReference)
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

export const getProductById=async (db,id)=>{
    const collectionReference= doc(db,Collection,id);/* Obtener la referencia el documento por id */
    /* obtener el documento con la referencia */
    return await getDoc(collectionReference)
    .then((item)=>{
        if(item.exists){
            return{
                ...item.data()
            }
        }
    })
}

/* Obtener productos por categoria */
export const getProductsByCategory=async (db,category)=>{
    /* Obtener la referencia de los documentos que cumplan la query */
    const collectionReference=query(
        collection(db, Collection),
        where('categoria','==',category)
    )/* Obtener la collection de documentos que cumplen con la query */
    return await getDocs(collectionReference)
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

/* Set products para actualizar inventario */
export const setProductById=async(db,id,data)=>{
return await setDoc(doc(db,Collection,id), data).then((data)=>console.log("Información actualizada")).catch((error)=>console.log("Error al actualizar producto",error));
}
