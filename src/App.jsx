/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import {Routes,Route} from 'react-router-dom';//Importar react router
import ItemListContainer from './Componentes/Container/ItemListContainer'
function App() {
  return (
    <>
      <Navbar/>{/* hacer una bandera en el navbar para guardar el tipo de categoria para filtrar */}
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/:categorias' element={<ItemListContainer/>}/>
    </Routes>
    </>
  );
}

export default App;
