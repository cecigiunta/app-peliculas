import React from "react";

function NavBar(){
    return(
        <div>
            <header className="d-flex flex-column bg-dark">
                <div className="d-flex flex-row justify-content-start mb-2 ms-2">                    
                    <img src="https://st3.depositphotos.com/8080374/13250/v/450/depositphotos_132509220-stock-illustration-popcorn-for-movie-theater.jpg" class="imgLogo" alt="" />
                    <h1 className="text-white display-4 ms-3 mt-3">Play Cine</h1>
                </div>
            </header>
        </div>
    )

}
export default NavBar;