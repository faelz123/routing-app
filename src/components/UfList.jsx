import React, {useState} from 'react';
import Cadastro from './Cadastro';


import Consulta from './Consulta';


const UfList = () => {

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


    return ( 
        <div>
          <Cadastro handleUfAdd={handleUfAdd} nome='nome' sigla='sigla' cod='código'/>
          <Consulta uf={uf}/>
        </div>
    );
}
 
export default UfList;