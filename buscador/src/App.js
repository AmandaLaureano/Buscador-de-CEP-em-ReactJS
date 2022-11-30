import React, { Component }  from 'react';
import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './buscador.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('') //Input define o estado, e setInput define uma função passando um valor novo para ele.
  const [cep, setCep] = useState({});


  async function handleSearch(){

   if(input === ""){
    alert("Digite um CEP!")
    return;
   }

   try{
    const response = await api.get(`${input}/json`);
    console.log(response.data)
    setCep(response.data)
    setInput("")

   }catch{
    alert("Ops! Erro ao buscar o CEP digitado");
    setInput("")
   }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <h2 className='subtitle'>Digite um CEP abaixo e busque informações</h2>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button className="buttonSearch" onClick={handleSearch}> 
        <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
\

      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      
      </main>
      )}

      
    </div>
  );
}

export default App;
