import React  from "react";
import {Link} from "react-router-dom";
import {Card, Button, Col} from "react-bootstrap";

function Pelicula(props){
    const {datos} = props;
    let imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${datos.poster_path}`;
    return(
        <Col className="mx-0">
            <div>
                <div className="cardStyle card bg-dark mb-2">
                    <Card.Img variant="top" src={imgSrc}/>
                    <Card.Body>
                    <Card.Title className="fs-5 my-2">{datos.title}</Card.Title>
                    <Card.Text>
                        {datos.vote_average} <span className="fa fa-star orange"></span>
                    </Card.Text>
                    <Card.Text>
                        {datos.release_date}
                    </Card.Text>
                    <Button className="btnCard btn-danger text-white" as={Link} to={'/movie/'+ datos.id}> Ver Detalle </Button>
                    </Card.Body>
                </div>
            </div>
        </Col>
    )
}
export default Pelicula;