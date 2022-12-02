import Botton from "../Botones/Botton";

const Footer=()=>
{
    return(<div className="container-fluid bg-container">
        <br />
        <a href="#" className="text-decoration-none text-secondary"><p className="ms-2 mt-5 text-center">Contacto</p></a>
        <a href="https://goo.gl/maps/r9j4XdFvimS1yXwj6" className="text-decoration-none text-secondary"><p className="ms-2 mt-2 text-center">Ubicación</p></a>
        <p className="ms-2 mt-2 text-center">Siguenos en <Botton clase="fa-brands fa-facebook-f fs-4 ms-2"/><Botton clase="fa-brands fa-instagram fs-4 ms-2"/><Botton clase="fa-brands fa-twitter fs-4"/></p>
        <p className=" mt-2 text-center text-secondary">	&#9400; Pistons 2022 all rights are reserved by the law of Mexico</p>
    </div>)
}

export default Footer;