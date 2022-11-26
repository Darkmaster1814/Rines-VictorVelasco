/*======================Item de conenedor para productos=================================================*/
import React from 'react';
const Container = (props) => {
    return (
        <div className="container-fluid bg-container">
            {props.children}
        </div>
    );
}

export default Container;





