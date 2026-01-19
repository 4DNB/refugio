import { useState } from 'react';
import logo from './assets/logo.svg'
import './App.css'
import perro from "./assets/fondo_perro.jpg";

function App() {

  return (
    <div className="Main">
      {/* <h1>Refugio</h1> */}
      <div className='div1'>
        <img className='imgPerr' src={perro} alt="" />
        <div class="Mainfigura">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 140">
            <path fill="white" d="M0,96L60,106.7C120,117,240,139,360,138.7C480,139,600,117,720,101.3C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
