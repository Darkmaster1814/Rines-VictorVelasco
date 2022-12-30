/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import {Routes,Route} from 'react-router-dom';//Importar react router
import ItemListContainer from './Componentes/Product/ItemListContainer'
import ItemDetailContainer from './Componentes/Product/ItemDetailContainer';
import Footer from './Componentes/Footer/Footer';
import CartProvider from './Context/CartProvider';//Importamos el contexto del carrito
import CartContainer from './Componentes/Cart/CartContainer';
import LoginProvider from './Context/LoginProvider';
import LoginContainer from './Componentes/Login/LoginContainer';
import OrderContainer from './Componentes/Checkout/OrderContainer';
function App() {
  return (
    <>
    <LoginProvider>
    <CartProvider>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categorias' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='/login' element={<LoginContainer/>}/>
      <Route path='/cart/order' element={<OrderContainer/>}/>
    </Routes>
    </CartProvider>
    </LoginProvider>
    <Footer/>
    </>
  );
}

export default App;
