export function getAll(){
    return fetch("http://api.themoviedb.org/3/discover/movie?api_key=da3403a967b3b32f12431cd7744e3d2a&sort_by=popularity.desc")
    .then(res => res.json())  
}

export function getById(id){
    return fetch("http://api.themoviedb.org/3/movie/"+id+"?api_key=da3403a967b3b32f12431cd7744e3d2a")
    .then(res => res.json())
}
