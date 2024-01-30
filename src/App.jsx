import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Navbar/Skills/Skills';
import Hero from './components/Navbar/Hero/Hero'

const App = () => {
  return(
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
      </div>
    </>
  )
};
export default App;
