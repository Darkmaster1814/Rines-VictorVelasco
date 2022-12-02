/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import {Routes,Route} from 'react-router-dom';//Importar react router
import ItemListContainer from './Componentes/Container/ItemListContainer'
import ItemDetailContainer from './Componentes/Container/ItemDetailContainer';
import Footer from './Componentes/Footer/Footer';
function App() {
  return (
    <>
      <Navbar/>{/* hacer una bandera en el navbar para guardar el tipo de categoria para filtrar */}
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categorias' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
