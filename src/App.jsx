/* Componente de la aplicación, desde aquí se hace la conexión hacia todos los componentes y rutas de la aplicación */
/* Importar React Router */
import { Routes, Route } from 'react-router-dom';

/* Importación de componentes */
import NavBar from './Componentes/Nav/Navbar';
import ItemListContainer from './Componentes/Product/Catalogo/ItemListContainer'
import ItemDetailContainer from './Componentes/Product/ItemDetail/ItemDetailContainer';
import Footer from './Componentes/Footer/Footer';
import BriefContainer from './Componentes/Checkout/BriefContainer';
import OrderContainer from './Componentes/Orden/OrderContainer';
/* Importación de contextos */
import CartProvider from './Context/CartProvider';
import CartContainer from './Componentes/Cart/CartContainer';
import LoginProvider from './Context/LoginProvider';
import LoginContainer from './Componentes/Login/LoginContainer';
/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';   
/* Main Render function */
function App() {
  return (
    <>
      <LoginProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route path='/category/:categorias' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/cart/brief' element={<BriefContainer />} />
            <Route path='/cart/order' element={<OrderContainer />} />
          </Routes>
        </CartProvider>
      </LoginProvider>
      <Footer />
    </>
  );
}

export default App;