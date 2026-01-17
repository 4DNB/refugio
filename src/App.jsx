import { useState } from 'react';
import logo from './assets/logo.svg'
import './App.css'

function App() {

  return (
    <div className="Main">
      <nav>
        <div>
          <li className='MainLi1'>
            <ul>Inicio</ul>
          </li>
        </div>
        <div>
          <li className='MainLi2'>
            <ul>Iniciar Sesion</ul>
          </li>
        </div>
      </nav>
      <h1>Refugio</h1>
    </div>
  );
}

export default App;
