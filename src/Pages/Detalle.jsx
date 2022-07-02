import React, {useEffect, useState} from "react";
import { getById } from "../Services/PeliculasServices";
import LoadingSpinner from "../Components/Spinner";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { Table , Button, Container } from "react-bootstrap";


//*En este componente tengo que recibir el dato del id para poder mostrar el detalle solo de ese producto

function Detalle(){
    const [pelicula, setPelicula] = useState({});
    const [loading, setLoading] = useState(true); //*Creamos un hook para el "Cargando..."
    const {id} = useParams(); //*Recibo el id con el nombre que le puse en el RUTEO y lo guardo en esa constante
    let imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${pelicula.poster_path}`;

useEffect(
    () => {
        const request = async () => {  //*Declaro aca mi funcion async porq el useeffect no medeja
            try{
                const response = await getById(id);
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
        <LoadingSpinner/>
    )
} else {
    return(
        <div>
            <header className="m-4 text-danger">
                <span className="display-5">
                    {pelicula.title}
                </span>
            </header>
            <Container fluid className="d-flex flex-row col-8">              
                <img src={imgSrc} className="me-2 col-3" alt="poster-movie"/>
                <Table striped bordered variant="dark" className="me-5">
                    <thead>
                        <tr className="p-2">
                            <th>
                                <span> Título original </span>
                            </th>
                            <th >
                                <span> "{pelicula.original_title}" </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fecha de lanzamiento</td>
                            <td>{pelicula.release_date}</td>
                        </tr>
                        <tr>
                            <td>Descripción</td>
                            <td>
                                <p> {pelicula.overview} </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Género(s)</td>
                            <td>{pelicula.genres.map(genre => genre.name).join(", ")}</td>
                        </tr>
                    </tbody>
                </Table>  
                </Container>             
                <Button className="btnCard btn-danger text-white btn-lg" as={Link} to={'/'}> Volver a Inicio </Button>
        </div>
    )
}
}

export default Detalle;