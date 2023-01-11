/* Componente de Ordenes de compra, realiza la solicitud a la db para crear un map de carritos */
/* Importación de librerias */
import { getFirestore } from "@firebase/firestore";
import { useState, useContext, useEffect } from "react";
/* Importación de contextos */
import LoginContext from "../../Context/LoginContext";
/* Importación de componentes */
import Order from "./Order";
/* Importación de queries */
import { getOrdersByUserId } from "../../Queries/ordenes";
/* Ordenes de compra */
const OrderList = () => {
    const [orders, setOrders] = useState();//Variable de estado de las ordenes de compra 
    const ContextoLogin = useContext(LoginContext);//Acceder al contexto de login para mostrar ordenes de compra solo para el usuario logeado
    /* Useeffect para renderizar y actualizar cada que se genere o entre una orden de compra */
    useEffect(() => {
        const db = getFirestore();
        getOrdersByUserId(db, ContextoLogin.mail).then((orders) => {
            setOrders(orders);
        })
    }, [ContextoLogin])
    /* Render de ordenes de compra */
    const renderOrders = () => {
        return (orders?.map((item) => <div key={item.id}><Order id={item.id} fecha={item.fecha} total={item.total} estatus={item.estatus} carrito={item.carrito} /></div>))
    }
    return (<>{renderOrders()}</>)
}

export default OrderList;