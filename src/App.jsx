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
import CartProvider from './Context/CartProvider';//Importamos el contexto del carrito
import CartContainer from './Componentes/Cart/CartContainer';
function App() {
  return (
    <>
    <CartProvider>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categorias' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
    </Routes>
    </CartProvider>
    <Footer/>
    
    </>
  );
}

export default App;
