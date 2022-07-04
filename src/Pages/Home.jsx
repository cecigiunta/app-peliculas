import React, {useState, useEffect} from "react";
import Pelicula from "../Components/Pelicula";
import LoadingSpinner from "../Components/Spinner";
import HeaderHome from "../Components/HeaderHome";
import {getAll} from "../Services/PeliculasServices";
import {Row} from "react-bootstrap";

function Home(){
    const [peliculas, setPeliculas] = useState([]); 
    const [resultado, setResultado] = useState([]);
    const [loading, setLoading] = useState(true); 
    let estrella = 5 

useEffect(
    () => {
        const request = async () => { 
            try {
                const response = await getAll() 
                if(response.results){
                    setPeliculas(response.results) 
                    setResultado(response.results) 
                    setLoading(false); 
                }    
            } catch (e) { 
                console.log(e);
            }
        }
        request();
    }, []
)

//* -------- Filtrado por Búsqueda -----------

const handleChange = (e) => {
    e.preventDefault();
    AplicarBusqueda(e.target.value)
}

function AplicarBusqueda (busqueda){
    !busqueda || busqueda === "" ? setResultado(peliculas) : 
    setResultado(peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(busqueda.toLowerCase())))
}


//* -------- Filtrado por Calificación ----------- 

function handleClick (e) {
    estrella = parseInt(e.target.id);
    for (let i =0; i<5; i++){
        if (i<estrella){
            document.getElementById((i+1)).classList.add("orange") 
        } else {
        document.getElementById((i+1)).classList.remove("orange") 
        }
    }
    estrella = estrella*2;
    setResultado(peliculas.filter(pelicula => pelicula.vote_average <= estrella))
}

if(loading){
    return (
    <div>
        <LoadingSpinner/>
    </div>
    ) 
} else {
    if(resultado.length === 0){
    return (
        <div className="justify-content-center">
            <HeaderHome handleChange={handleChange} handleClick={handleClick} />

            <div id="home" className="alert alert-danger col-8 mx-auto">
                <p className="lead">No se encontraron películas</p>
            </div>
        </div>
    )
} else {
    return(
    <div className="justify-content-center">
        <HeaderHome handleChange={handleChange} handleClick={handleClick} />

        <div id="home">
        <Row className="mx-2">    
            {resultado.map(pelicula => {   
                return(
                <Pelicula datos={pelicula} /> 
            )}
            )}
        </Row>    
        </div>                
    </div>
)}}
}
export default Home;