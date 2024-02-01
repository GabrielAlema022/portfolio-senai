import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Navbar/Skills/Skills';
import Hero from './components/Navbar/Hero/Hero'
import ContactMe from './components/ContactMe/contactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
};
export default App;
