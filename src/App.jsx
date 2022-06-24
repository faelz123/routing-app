import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

import Uf from './components/UfList';

import './App.css';
//criar lista de objetos de uf
//consultar por sigla ou codigoUF, traga apenas um registro, listando sem parametros traga todos os registros do banco de dados

function App() {

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' exact element={
          <Link to='/uf'>Uf</Link>
          } />
          <Route path='/uf' element={<Uf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
