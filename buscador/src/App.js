import React, { Component }  from 'react';
import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './buscador.css';

function App() {

  const [input, setInput] = useState('teste') //Input define o estado, e setInput define uma função passando um valor novo para ele.

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <h2 className='subtitle'>Digite um CEP abaixo e busque informações</h2>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP" value={input}></input>
        <button className="buttonSearch"> 
        <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 89400000</h2>
        <span>Rua: Avenida João Pessoa</span>
        <span>Complemento: Casa</span>
        <span>São Pedro</span>
        <span>Porto União - SC</span>
      
      </main>
      
    </div>
  );
}

export default App;
