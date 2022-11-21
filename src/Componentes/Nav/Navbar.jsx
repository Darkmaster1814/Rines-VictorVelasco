/* ===============================COMPONENTE DE BARRA DE NAVEGACIÓN======================== */
import React from 'react';
/* Importación de imagenes */
import logo from "../../Imagenes/logo.svg";
/* Importacion de componentes */
import Cart from "./CartWidget";
import Ubicacion from './Ubicacion';
import Favoritos from './Favoritos';
import Login from './Login';

const NAV=()=>{
  let valor=0;//Valor harcodeado de carrito de compras
    return(
        <>
<nav className="navbar navbar-expand-sm bg-nav rounded-4 mt-4 sticky-top">
  <a className="navbar-brand" href="#">
    <img src={logo} alt="logo" className="logo d-flex  ms-2"/>
      <h2 className="logo-text justify-content-start ms-3 fs-4">PISTONS</h2>
  </a>
  <div className="d-flex mx-sm-auto me-md-2">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Favoritos nombre="FAVORITOS" evento={()=>{alert("Abriste la sección de favoritos")}}/>
      </li>
      <li className="nav-item">
        <Cart nombre="CARRITO" evento={()=>{alert(`Abriste el carrito de compras: ${++valor}`)}}/>
      </li>
      <li className="nav-item">
        <Ubicacion nombre="UBICACIÓN" evento={()=>{alert("Abriste la sección ubicación")}}/>
      </li>
      <li className="nav-item">
        <Login nombre="LOG-IN" evento={()=>{alert("Abriste la sección de iniciar sesión")}}/>
      </li>
    </ul>
    </div>
</nav>
</> );
}
export default NAV;