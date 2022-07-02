import React, { useState } from "react";

function Puntuacion(props){
const [puntuacion, setPuntuacion] = useState(0);
const {datos} = props;   //*Los datos q recibo de "Home"
let resultado = []

function handleClick (e) {
    let estrella = e.target.id;
    setPuntuacion(estrella);
    console.log("PUNT: ",puntuacion);
    console.log("ESTRELLA: ",estrella);
    for (let i =0; i<5; i++){
        if (i<estrella){
            document.getElementById((i+1)).classList.add("orange")  //LE DIGO Q ME PINTE TODAS LAS ANTERIORES
        } else {
        document.getElementById((i+1)).classList.remove("orange") //LE DIGO Q ME PINTE TODAS LAS ANTERIORES 
        }
    }


    // if(puntuacion === 1){
    //     resultado = peliculas.filter(pelicula => pelicula.vote_average <= 2)
    //     console.log("resultado", resultado);
    //     console.log(puntuacion);
    // }
    // if(puntuacion === 2){
    //     resultado = datos.filter(pelicula => pelicula.vote_average <= 4)
    //     console.log("resultado", resultado);
    //     console.log(puntuacion);
    // }
    // if(puntuacion === 3){
    //     resultado = datos.filter(pelicula => pelicula.vote_average <= 6)
    //     console.log("resultado", resultado);
    //     console.log(puntuacion);
    // }
    // if(puntuacion === 4){
    //     resultado = datos.filter(pelicula => pelicula.vote_average <= 8)
    //     console.log("resultado", resultado);
    //     console.log(puntuacion);
    // }
    if(puntuacion === 0){
        resultado = datos.filter(pelicula => pelicula.vote_average <= 6)
        console.log("resultado", resultado);
        console.log(puntuacion);
    }

}



// console.log(datos);
// console.log(datos[0].vote_average);

    return(
        <div>
            <h4>Filtrar por Puntuación</h4>
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







// let contador;

// function calificar(){
//     let item = document.getElementsByClassName("fa-star");
//     console.log(item);
//      contador = item.id[0]   //Me devuelve el primer digito del id (que es el numero)
//     console.log(contador);
//      for (let i =0; i<5; i++){
//          if (i<contador){
//              document.getElementById((i+1)+nombre).style.color="orange"  //LE DIGO Q ME PINTE TODAS LAS ANTERIORES
//          }else{
//              document.getElementById((i+1)+nombre).style.color="orange"
//          }
//         }
// }

// function Mensaje(){
//     alert("Gracias por calificar, la calificación es de: " + contador + " estrellas");
// }