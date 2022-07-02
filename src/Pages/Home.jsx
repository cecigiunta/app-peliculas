import React, {useState, useEffect} from "react";
import Pelicula from "../Components/Pelicula";
import Puntuacion from "../Components/Puntuacion";
import LoadingSpinner from "../Components/Spinner";
import {getAll} from "../Services/PeliculasServices";
import {Row} from "react-bootstrap";

function Home(){
    const [peliculas, setPeliculas] = useState([]); //*Array de peliculas vacio
    const [loading, setLoading] = useState(true); //*Creamos un hook para el "Cargando..."
    const [busqueda, setBusqueda] = useState(""); //*Creamos un hook para la busqueda
    const [puntuacion, setPuntuacion] = useState(0);
    let resultado = [] //* creo un array y le asigno el array de peliculas

useEffect(
    () => {
        //*uso async await: mucho mas prolijo ,legible
        const request = async () => {  //*Declaro aca mi funcion async porq el useeffect no medeja
            try {
                const response = await getAll()  //*llamo a la funcion en donde pasé mi Fetch (PeliculasServices)
                if(response.results){
                    setPeliculas(response.results)   //*Le asignamos TODO el array de peliculas a mi hook
                    setLoading(false);           //*Modificamos el Cargando para q quede en false
                }    
            } catch (e) {   //*En caso de que uno de mis .then falle..
                console.log(e);
            }
        }
        request();
    }, []
)

const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log("e ", e.target.value);
}

if(!busqueda || busqueda === ""){
    resultado = peliculas
}else { 
    resultado = peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(busqueda.toLowerCase()))
}





    if(loading){
        return (
            <div>
                <LoadingSpinner/>
            </div>
        ) 
    } else {
        return(
            <div>
                <header className="d-flex justify-content-end m-4">
                    <Puntuacion datos={resultado} />
                    <form className="d-flex ms-5 justify-content-end" role="search">
                        <input id="inputBusqueda" className="form-control px-4" onChange={handleChange} type="text" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="btn btn-outline-danger" type="submit">Buscar</button>
                    </form>      
                </header>

                <Row className="mx-2">
                {/* Voy a recorrer mi Hook con MAP   */}
                {resultado.map(pelicula => {   //*La variable pelicula q se crea aca va a corresponder a CADA elemento del array
                    return(
                    <Pelicula datos={pelicula} /> 
                    //*le paso las props q recibe mi componente Pelicula
                    //*En cada iteracion va a imprimir ese componente
                )}
                )}
                </Row>                    
            </div>
        )
    }

}
export default Home;