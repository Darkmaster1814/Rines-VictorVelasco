/* Componente contenedor del detalle del catalogo del producto seleccionado. */
/* Importación de librerías */
import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
import { getFirestore } from 'firebase/firestore';
/* Importación de queries para consulta de db */
import { getProductById } from '../../../Queries/productos';//Query para obtener producto por id
/* Importación de componentes */
import ItemDescription from './ItemDescription';
import Loader from '../../Loader/Loader';
const ItemDetailContainer = () => {
        const [item, setItem] = useState(null);//state del Item del articulo a ver sus detalles
        const { id } = useParams();/* params para seleccionar el tipo de ID a buscar en el server (categoria) */
        /* Obtencion asyncrona de un producto por id usando un serverless service firebase */
        useEffect(() => {
                const db = getFirestore();//Obtenemos la db de firebase
                getProductById(db, id).then((product) => {
                        setItem(product);
                })
        }, [id]);

        return (<div className="container-fluid bg-item">
                {item === null ? <Loader columnas="col-8 mt-5" /> :
                        <ItemDescription producto={item} />}
        </div>)
}

export default ItemDetailContainer;