/* Componente de listado de productos del catalogo */
/* Importación de librerías */

import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
import { getFirestore } from 'firebase/firestore';//Importamos firestore
/* Importación de queries para consulta a db */
import { getAllProducts } from '../../../Queries/productos';//Importamos las querys para la db
import { getProductsByCategory } from '../../../Queries/productos';
/* Importación de componentes */
import Loader from '../../Loader/Loader';
import Item from "./Item";

const ItemList = () => {
    const { categorias } = useParams();//hook de use params para obtener las variables de la url del router y seleccionar el filtro de productos en la api
    const [productos, setProductos] = useState(null);//Creación de variable de estado para almacenar el json de productos
    /* Obtencion asincrona de la DB usando un serverless service Firebase */
    useEffect(() => {
        /* Obtencion de la base de datos de firebase */
        const db = getFirestore();
        /* Si es undefined hace referencia a todos los productos, de lo contrario el params tiene un valor de category para hacer una query */
        if (categorias === undefined) {
            getAllProducts(db).then((products) => {
                setProductos(products);
            })
        }
        else {
            getProductsByCategory(db, categorias).then((products) => {
                setProductos(products);
            })
        }
    }, [categorias]);
    /* condicional de render para ir cargando cada sección de busqueda */
    const renderCards = () => {
        return (productos?.map((item) => <div className='col-lg-3 col-md-4 col-sm-12 ms-4 mt-5' key={item.id}><Item producto={item} /></div>));
    }
    /* se va ir renderizando diferentes cards */
    return (<div>
        {productos === null ? <Loader columnas="col-8 mt-5" /> : <div className='row'> {renderCards()}</div>}</div>
    );
}

export default ItemList;