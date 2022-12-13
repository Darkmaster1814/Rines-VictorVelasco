/*======================Item de conenedor para productos=================================================*/
import ItemList from './ItemList';
/* Hooks */
import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
const ItemListContainer = () => {
    const { categorias } = useParams();//hook de use params para obtener las variables de la url del router y seleccionar el filtro de productos en la api
    /* Creación de variable de estado para almacenar el json de productos */
    const [productos, setProductos] = useState(null);
    /* Creación de variable de estado para construir petición de json productos */
    const[categoria,setCategoria]=useState("productos")
    /* useEffect para montar el string de la petición cada que cambie el params */
    useEffect(()=>{
        categorias===undefined? setCategoria("productos"): setCategoria(`productos?categoria=${categorias}`);
    },[categorias]);
    /* Obtención asincronica de productos usando el mount para renderizar al comienzo una vez recibida la info desde mockapi */
    useEffect(() => {
        fetch(`https://63881b6ed94a7e5040931cad.mockapi.io/${categoria}`)
            .then((respuesta) => respuesta.json()/* convertir de response a objeto json */)
            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => {
                console.error("Error al consultar la API: ", error)
            })
    }, [categoria])

    return (
        <div className="container-fluid bg-container">
            <div className='row'>
                <ItemList columnas="col-md-5 col-lg-3 mt-5" productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;