import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFound(){
    return(
        <div className="py-4">
            <span className="fs-2 d-block py-4">404 - Página no encontrada</span>
            <Button className="btn-outline-danger bg-dark text-danger hover-danger btn-lg" as={Link} to={'/'}> Volver a Home</Button>
        </div>
    )
}
export default NotFound;