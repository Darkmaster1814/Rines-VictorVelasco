/*======================Item de conenedor para productos=================================================*/
import ItemList from './ItemList';
/* Hooks */
import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
const ItemListContainer = () => {
    const { categorias } = useParams();//hook de use params para obtener las variables de la url del router y seleccionar el filtro de productos en la api
    /* Creación de variable de estado para almacenar el json de productos */
    const [productos, setProductos] = useState(null);
    const [productosOriginal, setProductosOriginal] = useState(null);
    /* funcion de filtrado por categoria dada en useparams */
    function filtrar() {
        setProductos(productosOriginal.filter((item) => item.categoria === categorias))
    }
    /* Obtención asincronica de productos usando el mount para renderizar al comienzo una vez recibida la info desde mockapi */
    useEffect(() => {
        fetch(`https://63881b6ed94a7e5040931cad.mockapi.io/productos`)
            .then((respuesta) => respuesta.json()/* convertir de response a objeto json */)
            .then((respuesta) => {
                console.log(respuesta)
                setProductosOriginal(respuesta)
                setProductos(respuesta)
                //categoria===undefined? setProductos(respuesta) : filterItem() /* obtener una parte del json */
                /* Guardamos el objeto json en el usestate para usarlo dentro del render */
            })
            .catch((error) => {
                console.error("Error al consultar la API: ", error)
            })
    }, [])
    /* Renderizado del filtro  */
    useEffect(() => {
        (categorias !== undefined) ? filtrar() : setProductos(productosOriginal);
        console.log(productos)
    }, [categorias])

    return (
        <div className="container-fluid bg-container">
            <div className='row'>
                <ItemList columnas="col-md-5 col-lg-3 mt-5" productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;