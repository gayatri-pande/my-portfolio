import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div>
      <Home/>
      <About/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
    
  
   </>
  );
}

export default App;
