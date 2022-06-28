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

      // const handleUfRemove = (ufId) => {
      //   const newUf = uf.filter(uf => (uf.sigla !== ufId || uf.codigoUF !== ufId) );
      //   setUf(newUf);
      // }

    return (
        <div>
          <Cadastro 
            handleUfAdd={handleUfAdd} 
            inputData={inputData} 
            setInputData={setInputData} 
            // handlePessoaAdd={'a'}
          />
          <Consulta dataUf={uf}/>
        </div>
    );
}
 
export default UfList;