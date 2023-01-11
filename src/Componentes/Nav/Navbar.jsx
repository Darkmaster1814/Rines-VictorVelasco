/* ===============================COMPONENTE DE BARRA DE NAVEGACIÓN======================== */
/* Componente de barra de navegación, muestra un icono de logotipo que lleva al inicio, las categorias disponibles, carrito de compras y opciones de inicio de sesión */
/* Importación de librerias */
import { Link } from 'react-router-dom';//libreria de link para las rutas
/* Importación de imagenes */
import logo from "../../Imagenes/logo.svg";
/* Importación de componentes */
import CartWidget from "./CartWidget";
import ButtonWidget from '../Botones/ButtonWidget';
const NavBar = () => {
  /* Renderizado de la barra de navegación */
  const renderNavBar = () => {
    return (<nav className="navbar navbar-expand-sm bg-nav rounded-4 mt-4 sticky-top">
      <Link to='/'>
        <button className='btn-nav'>
          <img src={logo} alt="logo" className="logo d-flex  ms-2" />
          <h2 className="logo-text justify-content-start ms-3 fs-4">PISTONS</h2>
        </button>
      </Link>
      <div className="d-flex mx-sm-auto me-md-2">
        <ul className="navbar-nav">
          <Link to="/category/Aceites">
            <li className="nav-item">
              <ButtonWidget nombre="ACEITES" tipo="nav-i fa-solid fa-oil-can" />
            </li>
          </Link>
          <Link to="/category/Accesorios">
            <li className="nav-item">
              <ButtonWidget nombre="ACCESORIOS" tipo="nav-i fa-solid fa-screwdriver-wrench" />
            </li>
          </Link>
          <Link to='/category/Rines'>
            <li className="nav-item">
              <ButtonWidget nombre="RINES" tipo="nav-i fa-solid fa-truck-monster" />
            </li>
          </Link>
          <Link to='/cart'>
            <li className="nav-item">
              <CartWidget />
            </li>
          </Link>
          <Link to='/login'>
            <li className="nav-item">
              <ButtonWidget nombre="LOG-IN" tipo="nav-i fa-solid fa-right-to-bracket" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>)
  }
  return (<>{renderNavBar()}</>);
}
export default NavBar;