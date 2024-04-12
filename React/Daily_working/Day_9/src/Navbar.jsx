import React from "react";
import {Link} from 'react-router-dom';
import Header from './Header';
import './Navbar.css'


export default function Navbar() {
  return (
    <div className="navbar">
        <Header/>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About us</Link></li>
            <li><Link to="/Contact">Contact us</Link></li>
            <li><Link to="/Learnmore">Learn more</Link></li>
        </ul>
    </div>
  )
}
