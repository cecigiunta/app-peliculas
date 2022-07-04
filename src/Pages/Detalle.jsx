import React, {useEffect, useState} from "react";
import { getById } from "../Services/PeliculasServices";
import LoadingSpinner from "../Components/Spinner";
import {Link, useParams} from "react-router-dom";
import { Table , Button, Container } from "react-bootstrap";

function Detalle(){
    const [pelicula, setPelicula] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 
    let imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${pelicula.poster_path}`;

useEffect(
    () => {
        const request = async () => { 
            try{
                const response = await getById(id);
                if(response){
                    setPelicula(response);
                    setLoading(false);
                }            
            }catch (e) {  
                console.log(e);
            }
        }
        request();
    }, [id]  
)

if(loading){
    return (
        <LoadingSpinner/>
    )
} else {
    return(
        <div>
            <header className="m-4 text-danger">
                <span className="fs-3">
                    {pelicula.title}
                </span>
            </header>
            <Container fluid className="d-flex flex-row col-8">              
                <img src={imgSrc} className="me-2 col-3" alt="poster-movie"/>
                <Table striped bordered variant="dark" className="me-5 text-center">
                    <thead>
                        <tr className="p-2">
                            <th>
                                <span> Título original </span>
                            </th>
                            <th>
                                <span className="m-4 fst-italic lh-lg"> "{pelicula.original_title}" </span>
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
                <Button className="btnCard btn-danger text-white" as={Link} to={'/'}> Volver a Inicio </Button>
        </div>
    )
}
}

export default Detalle;