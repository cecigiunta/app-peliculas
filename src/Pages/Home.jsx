import React, {useState, useEffect} from "react";
import Pelicula from "../Components/Pelicula";
import {getAll} from "../Services/PeliculasServices";

function Home(){
    const [peliculas, setPeliculas] = useState([]); //*Array de peliculas vacio
    const [loading, setLoading] = useState(true); //*Creamos un hook para el "Cargando..."

    //*Creo una funcion p manejar el evento de clasificacion:
    const handleClick = (clasificacion) => {
        // setPeliculas (peliculas.filter(pelicula => pelicula.clasificacion === clasificacion));
    }   

useEffect(
    () => {
        //*uso async await: mucho mas prolijo ,legible
        const request = async () => {  //*Declaro aca mi funcion async porq el useeffect no medeja
            try {
                const response = await getAll()  //*llamo a la funcion en donde pasé mi Fetch (PeliculasServices)
                console.log(response);
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


    if(loading){
        return (
            <div>
                Cargando...
            </div>
        ) 
    } else {
        return(
            <div>
                <header>
                    <h2>Peliculas destacadas</h2>
                </header>
    
                {/* Voy a recorrer mi Hook con MAP   */}
                {peliculas.map(pelicula => {   //*La variable pelicula q se crea aca va a corresponder a CADA elemento del array
                    return(
                    <Pelicula datos={pelicula} /> 
                    //*le paso las props q recibe mi componente Pelicula
                    //*En cada iteracion va a imprimir ese componente
                )}
                )}
                {/* <button onClick={handleClick}>Filtrar por Clasificación</button> */}                      
            </div>
        )
    }


}
export default Home;