/* Componente contenedor del catalogo de productos */
/* Hooks */
import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import { getFirestore } from 'firebase/firestore';
import { getProductById } from '../../Queries/productos';//Query para obtener producto por id
const ItemDetailContainer = () => {
        /* Item del articulo a ver sus detalles */
        const [item, setItem] = useState(null);
        /* paramps para seleccionar el tipo de ID a buscar en el server */
        const { id } = useParams();
        /* Obtencion asyncrona de un producto por id usando un serverless service firebase */
        useEffect(()=>{
                const db=getFirestore();//Obtenemos la db de firebase
                getProductById(db,id).then((product)=>{
                        setItem(product);
                })
        }, [id]);
        return (<div className="container-fluid bg-item">
                {item === null ? <Loader columnas="col-8 mt-5" /> :
                        <ItemDetail producto={item} />}
        </div>)
}

export default ItemDetailContainer;