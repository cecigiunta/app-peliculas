import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Pelicula(props){
let imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.datos.poster_path}`;
const {datos} = props;   //*Los datos q recibo de "Home"
    return(
        <div>
            <div className="peliculasContainer">
                <div className="pelicula">
                    <h3>{datos.title}</h3>
                    <img src={imgSrc}  alt="poster-movie" />
                    <p>Clasificación: {datos.vote_average}</p>
                    <p>{datos.release_date}</p>
                    <button><Link to={'/movie/'+ datos.id}>Ver Detalle</Link></button>
                </div>
                
            </div>

        </div>
    )
}

export default Pelicula;