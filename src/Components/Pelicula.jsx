import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Pelicula(props){
const {datos} = props;   //*Los datos q recibo de "Home"
    return(
        <div>
                <div className="peliculasContainer">
                    <div className="pelicula">
                        <h3>{datos.title}</h3>
                        <img src={datos.poster_path} alt="poster-movie" />
                        <p>Clasificación: {datos.vote_average}</p>
                        <p>{datos.release_date}</p>
                        <button><Link to="/detalle">Ver Detalle</Link></button>
                    </div>
                    
                </div>

        </div>
    )
}

export default Pelicula;