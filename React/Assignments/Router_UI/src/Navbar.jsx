
import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Learnmore from './Learnmore';
import Contactus from './Contactus';
import './Navbar.css'

function Navbar() {
  return (
    <div className='links'>
        <h1>React Router</h1>
      <ul>
        <li><Link to="./Home" > HOME </Link></li>
        <li><Link to="./About" > ABOUT </Link></li>
        <li><Link to="./Contactus" > CONTACT US </Link></li>
        <li><Link to="./Learnmore" > LEARN MORE </Link></li>
      </ul>
    </div>
  )
}
export default Navbar;
