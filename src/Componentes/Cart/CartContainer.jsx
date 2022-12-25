import { Link } from "react-router-dom";
import Botton from "../Botones/Botton";
import CartList from "./CartList";

const CartContainer = () => {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-12 mb-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1 mt-2">
                            <Link to="/"><Botton clase="fa-solid fa-angle-left fs-2" /></Link>
                        </div>
                        <div className="col-10 mt-2"><h3 className="text-center fs-2">Lista de compras</h3></div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <CartList />
            </div>
        </div>
    </div>)
}

export default CartContainer;