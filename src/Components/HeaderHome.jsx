import React from "react";
import Puntuacion from "../Components/Puntuacion";
import {Button, Form} from "react-bootstrap";

function HeaderHome (props){
const {handleClick, handleChange} = props;
    return(
        <div>
            <header className="d-flex justify-content-end m-4 col-11">
            <Puntuacion handleClick={handleClick}/> 
            <Form className="d-flex justify-content-end col-4" role="search">
                <Form.Control type="text" id="inputBusqueda" className="px-4 fs-5 bg-dark outline-danger text-white" onChange={handleChange} placeholder="Buscar" aria-label="Buscar" />
                <Button className="btn btn-danger text-white px-5 fs-5"> Buscar </Button>
            </Form>      
        </header>
        </div>
    )
}
export default HeaderHome;