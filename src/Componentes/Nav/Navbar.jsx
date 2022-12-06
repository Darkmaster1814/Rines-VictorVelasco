/* ===============================COMPONENTE DE BARRA DE NAVEGACIÓN======================== */
import React, { useState } from 'react';
/* Importación de imagenes */
import logo from "../../Imagenes/logo.svg";
/* Importacion de componentes */
import { Link } from 'react-router-dom';//libreria de link para las rutas
import Cart from "./CartWidget";
import ButtonWidget from './ButtonWidget';
const NAV = () => {
  let [flag, setFlag] = useState(true);//variable de estado para el cart widget
  let agregarCarrito = () => {
    setFlag(false);
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-nav rounded-4 mt-4 sticky-top">
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
            <li className="nav-item">
              <Cart nombre="CARRITO" evento={agregarCarrito} flag={flag} />
            </li>
            <li className="nav-item">
              <ButtonWidget nombre="LOG-IN" evento={() => { alert("Abriste la sección de iniciar sesión") }} tipo="nav-i fa-solid fa-right-to-bracket" />
            </li>
          </ul>
        </div>
      </nav>
    </>);
}
export default NAV;