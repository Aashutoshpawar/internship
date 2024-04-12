import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Help from "./Help";
import Navbar from "./Navbar";



const App = () =>{
  return(
    <>
    <Router>
    <Navbar/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Help' element={<Help/>}/>
    </Router>
      
    
    </>
  )
}
export default App;