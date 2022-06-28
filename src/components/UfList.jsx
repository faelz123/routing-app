import React from 'react';


import Cadastro from './Cadastro';
import Consulta from './Consulta';


const UfList = ({uf, setUf, inputData, setInputData}) => {

      const handleUfAdd = (ufCadastro) => {
        const newUf = [...uf, 
          {
            codigoUF: ufCadastro.input3,
            nome: ufCadastro.input1,
            sigla: ufCadastro.input2,
            status: 1
          }]
    
        setUf(newUf);
      }

      const handleUfRemove = (ufSigla , ufCodigoUF) => {
        const newUf = uf.filter(uf => (uf.sigla !== ufSigla || uf.codigoUF !== ufCodigoUF) );
        setUf(newUf);
      }

    return (
        <div>
          <Cadastro 
            handleUfAdd={handleUfAdd} 
            inputData={inputData} 
            setInputData={setInputData} 
            // handlePessoaAdd={'a'}
          />
          <Consulta handleUfRemove={handleUfRemove} dataUf={uf}/>
        </div>
    );
}
 
export default UfList;