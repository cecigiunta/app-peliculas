import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

function Pelicula(props){
let imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.datos.poster_path}`;
const {datos} = props;   //*Los datos q recibo de "Home"
    return(
        <Col>
        <div>
            <div className="cardStyle card bg-dark">
                <img src={imgSrc} className="card-img-top imgMovie" alt="poster-movie"/>
                <div className="card-body">
                    <h5 className="card-title bg-dark">{datos.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark text-white">Calificación: {datos.vote_average}</li>
                    <li className="list-group-item bg-dark text-white">{datos.release_date}</li>
                </ul>
                <div className="card-body">
                    <Button className="btnCard btn-danger text-white btn-lg" as={Link} to={'/movie/'+ datos.id}> Ver Detalle </Button>
                </div>
                </div>
        </div>
        </Col>
    )
}

export default Pelicula;