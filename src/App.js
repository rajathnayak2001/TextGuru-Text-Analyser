import logo from './logo.svg';
import * as React from "react";


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    
        <Navbar title="TextGuru" abouttext="About Us" Home="Home"/>
        
        <div className="container my-3">
        <Router> 
        <Routes>
           <Route path ="/about">
               <About/>
           </Route>
           <Route path="/">
            <TextForm heading="Enter The text To Analyse"/>
           </Route>
           
        </Routes>
          
        </Router>
        </div>
  
    </>
  );
}

export default App;
