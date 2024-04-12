import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home'
import About from './About';
import Contact  from './Contact'
import Learnmore from './Learnmore'
import Navbar from './Navbar';
import './App.css';


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/LearnMore' element={<Learnmore/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
