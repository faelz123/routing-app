import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

import Editar from './components/Editar';
import UfList from './components/UfList';

import './App.css';
//criar lista de objetos de uf
//consultar por sigla ou codigoUF, traga apenas um registro, listando sem parametros traga todos os registros do banco de dados

function App() {

  const [uf, setUf] = useState([
    {
      codigoUF: '',
      nome: '',
      sigla: '',
      status: 1
    }
  ]);


  useEffect(() => {
    const fetchUf = async () => {
      const {data} = await axios.get('http://localhost:3333/uf');
      // console.log(data)
      setUf(data.sort().reverse());
    }
    fetchUf();
  }, [uf.length]);

  // console.log('app', uf)
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
          <Route path='/uf/:ufselect' exact element={<Editar inputData={inputData} setInputData={setInputData} uf={uf} setUf={setUf}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
