import React from "react";

function Puntuacion(props){
const {handleClick} = props; 

    return(
        <div className="mx-5">
            <h5>Filtrar por Puntuación</h5>
                <div>
                    <span onClick={handleClick}  id="1" className="fa fa-star estrella"></span>
                    <span onClick={handleClick}  id="2" className="fa fa-star estrella ms-1"></span>
                    <span onClick={handleClick}  id="3" className="fa fa-star estrella ms-1"></span>
                    <span onClick={handleClick}  id="4" className="fa fa-star estrella ms-1"></span>
                    <span onClick={handleClick}  id="5" className="fa fa-star estrella ms-1"></span> 
                </div> 
        </div>
    )
}
export default Puntuacion;