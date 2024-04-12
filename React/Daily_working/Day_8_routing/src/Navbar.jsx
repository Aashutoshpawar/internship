import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <>
            <nav>
            <ul>
               <li><NavLink to="/Home" > Home</NavLink></li>
               <li><NavLink to="/About" > About</NavLink></li>
               <li><NavLink to="/Help" > Help</NavLink></li>
            </ul>
            </nav>
        </>

    );
}
