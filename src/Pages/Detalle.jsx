import React, {useEffect, useState} from "react";
import { getById } from "../Services/PeliculasServices";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

//*En este componente tengo que recibir el dato del id para poder mostrar el detalle solo de ese producto

function Detalle(){
const [pelicula, setPelicula] = useState({});
const [loading, setLoading] = useState(true); //*Creamos un hook para el "Cargando..."
const {id} = useParams(); //*Recibo el id con el nombre que le puse en el RUTEO y lo guardo en esa constante

useEffect(
    () => {
        const request = async () => {  //*Declaro aca mi funcion async porq el useeffect no medeja
            try{
                const response = await getById(id);
                console.log(response);
                if(response){
                    setPelicula(response);
                    setLoading(false);
                }            
            }catch (e) {   //*En caso de que uno de mis .then falle..
                console.log(e);
            }
        }
        request();
    }, [id]   //* le voy a pasar el id al array de useEffect
)

if(loading){
    return (
        <div>
            Cargando...
        </div>
    )
} else {
    return(
        //* MEJORAR LA PÁGINA DE DETALLE
        <div>
            <header>
                <h2>Detalle</h2>
            </header>
            <div className="peliculaDetalle">
                <h3>{pelicula.title}</h3>
                <p> Descripcion</p>
                <p>{pelicula.release_date}</p>
                <button><Link to="/">Volver a Home</Link></button>
            </div>
        </div>
    )
}
}

export default Detalle;