import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home";
import Detalle from "../Pages/Detalle";
import NotFound from "../Pages/NotFound";

function Routing(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movie/:id" element={<Detalle/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Routing;