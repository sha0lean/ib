import React from "react";
import {
    Link
} from "react-router-dom";

import Home from "../views/Home.js"
import AdminProfil from "../views/AdminProfil.js";

function NavBar(){
    return (
        <div id="mainContainerNav">
            <div id="containerNav">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/adminProfil">profil admin</Link>
                        <Link to="/createProject">créatin d'un projet</Link>
                        <Link to="/entrepreneurProfil">profil entrepreneur</Link>
                        <Link to="/validateProject">validation projet</Link>
                        <Link to="/login">se connecter</Link>
                    </nav>
                    
            </div>
        </div>
    )
}
export default NavBar;