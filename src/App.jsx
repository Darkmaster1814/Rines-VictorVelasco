/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import Container from './Componentes/Container/ItemListContainer';
import Item from './Componentes/Container/Item';
import { useState } from 'react';
function App() {
  const [productos, setProductos] = useState([
    { nombre: "Volante", precio: "$20,000" },
    { nombre: "Rines Oz", precio: "$23,000" },
    { nombre: "Frenos", precio: "$8,000" },
  ])
  const renderCards=()=>{
    const cardProducto=productos.map((item) =>{
    return (<Item nombre={item.nombre} precio={item.precio} />)
  })
  console.log(cardProducto)
    return cardProducto;
  }
  return (
    <>
      <Navbar />
      <Container>{renderCards()}</Container>
    </>
  );
}

export default App;
