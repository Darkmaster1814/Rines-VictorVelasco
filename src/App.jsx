/* Importación de librerias */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Importación de estilos CSS */
import './CSS/App.css';
/* Importaión de componentes */
import Navbar from './Componentes/Nav/Navbar';
import Container from './Componentes/Container/ItemListContainer';
function App() {
  return (
    <>
    <Navbar/>
    <Container/>
    </>
  );
}

export default App;
