//* En este archivo voy a traspasar el fetch del home.jsx a un servicio para hacerlo mas prolijo
//*Esto no va a ser React, sino javascript
//* Van a ir todos los servicios q yo consuma relacionados a mi entidad Peliculas

export function getAll(){
    return fetch("http://api.themoviedb.org/3/discover/movie?api_key=da3403a967b3b32f12431cd7744e3d2a&sort_by=popularity.desc")
    .then(res => res.json())   //*Tambien me devuelve un promisse
}

export function getById(id){
    return fetch("http://api.themoviedb.org/3/movie/"+id+"?api_key=da3403a967b3b32f12431cd7744e3d2a")
    .then(res => res.json())
}
