import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Learnmore from './Learnmore';


function App() {
  return (
    <div className='headernav'>
    
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contactus' element={<Contactus/>}/>
                <Route path='/Learnmore' element={<Learnmore/>}/>
               
            </Routes>
        </Router>
    
    </div> 
  );
}


export default App;