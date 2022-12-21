/* Componente contenedor del catalogo de productos */
/* Hooks */
import { useEffect, useState } from 'react';//hook de useefect y usestate
import { useParams } from 'react-router-dom';//hook para mandar props a un router
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
const ItemDetailContainer = () => {
        /* Item del articulo a ver sus detalles */
        const [item, setItem] = useState(null);
        /* paramps para seleccionar el tipo de ID a buscar en el server */
        const { id } = useParams();
        /* Use affect para montar los detalles del componente obteniendo la info desde la api */
        useEffect(() => {
                fetch(`https://63881b6ed94a7e5040931cad.mockapi.io/productos/${id}`)
                        .then((r) => r.json())
                        .then((r) => setItem(r)).catch((e) => console.log("Ocurrio un error de API" + e));
        }, [id])
        return (<div className="container-fluid bg-item">
                {item === null ? <Loader columnas="col-8 mt-5" /> :
                        <ItemDetail producto={item} />}
        </div>)
}

export default ItemDetailContainer;