import React from 'react'
import './App.css';


import Ad from './Component/ad';
import Card from './Component/card';
import Features from './Component/features';
import Footer from './Component/footer';
import Galerie from './Component/galerie';
import Header from './Component/header';
import Instruction from './Component/instructions';
import Navbar from './Component/navbar';
import Slider from './Component/Slider';


function App() {
  return (
    <div className="App" >
<Navbar/>
<Header/>
<Card/>
<Galerie/>
<Features/>
<Ad/>
<Instruction/>
<Slider/>
<Footer/>

    </div>
  )
}

export default App;
