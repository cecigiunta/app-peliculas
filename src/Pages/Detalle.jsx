import React from "react";
import {Link} from "react-router-dom";

function Detalle(){
    return(
        <div>
            <header>
                <h2>Detalle</h2>
            </header>
            <div className="peliculaDetalle">
                <h3>Titulo</h3>
                <p> Descripcion</p>
                <p>2022</p>
                <button><Link to="/">Volver a Home</Link></button>
            </div>
        </div>
    )
}

export default Detalle;