/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import Container from './Componentes/Container/ItemListContainer';
import ItemList from './Componentes/Container/ItemList';
import { useEffect, useState } from 'react';//hook de useefect y usestate
function App() {
  /* Creación de variable de estado para almacenar el json de productos */
  const [productos,setProductos]=useState(null);
  /* Obtención asincronica de productos usando el mount para renderizar al comienzo una vez recibida la info desde mockapi */
  useEffect(()=>{
    fetch('https://63881b6ed94a7e5040931cad.mockapi.io/productos')
    .then((respuesta)=>respuesta.json()/* convertir de response a objeto json */)
    .then((respuesta)=>{
        console.log(respuesta)
        setProductos(respuesta)/* obtener una parte del json */
        /* Guardamos el objeto json en el usestate para usarlo dentro del render */
    })
    .catch((error)=>{
        console.error("Error al consultar la API: ", error)
    })
  },[productos])//------------------------->DUDA como hago para actualizar esto cuando el server cambie de valor

  return (
    <>
      <Navbar />
      <Container><ItemList columnas="col-3" productos={productos}/></Container>
    </>
  );
}

export default App;
