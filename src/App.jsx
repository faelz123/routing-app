import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

import Editar from './components/Editar';

import './App.css';
import UfList from './components/UfList';
//criar lista de objetos de uf
//consultar por sigla ou codigoUF, traga apenas um registro, listando sem parametros traga todos os registros do banco de dados

function App() {

  const [uf, setUf] = useState([
    {
      codigoUF: 1,
      nome: "SÃO PAULO",
      sigla: "SP",
      status: 1
    },
    {
      codigoUF: 2,
      nome: "RIO DE JANEIRO",
      sigla: "RJ",
      status: 1
    }
  ]);

  const [inputData, setInputData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' exact element={
          <Link to='/uf'>Uf</Link>
          } />
          <Route path='/uf' exact element={<UfList uf={uf} setUf={setUf} inputData={inputData} setInputData={setInputData}/>} />
          <Route path='/uf/:siglaUF' exact element={<Editar inputData={inputData} setInputData={setInputData} uf={uf} setUf={setUf}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
