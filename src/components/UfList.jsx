import axios from "axios";
import React from "react";


import Cadastro from "./Cadastro";
import Consulta from "./Consulta";

const UfList = ({ uf, setUf, inputData, setInputData }) => {
  // const handleUfAdd = (ufCadastro) => {
  //   const newUf = [
  //     ...uf,
  //     {
  //       codigo_UF: ufCadastro.input3,
  //       nome: ufCadastro.input1,
  //       sigla: ufCadastro.input2,
  //       status: 1,
  //     },
  //   ];

  //   setUf(newUf);
  // };


  const handleUfAdd = async (ufCadastro) => {
    await axios.post("http://localhost:3333/uf", {
      nome: ufCadastro.input1,
      sigla: ufCadastro.input2,
      status: ufCadastro.input3
    });

    setUf('');
  };

  const handleDeleteUf = (ufCod) => {

    const deleteUf = async () => {
      try {
        const {data} = await axios.delete(`http://localhost:3333/uf/${ufCod}`);
        console.log(data);
        setUf([data])
      } catch(e) {
        console.log(e);
      }
    }
    deleteUf();
  }

  // const handleUfRemove = (ufSigla, ufCodigoUF) => {
  //   const newUf = uf.filter(
  //     (uf) => uf.sigla !== ufSigla || uf.codigoUF !== ufCodigoUF
  //   );
  //   setUf(newUf);
  // };

  return (
    <div>
      <Cadastro
        handleUfAdd={handleUfAdd}
        inputData={inputData}
        setInputData={setInputData}
        // handlePessoaAdd={'a'}
      />
      <Consulta handleDeleteUf={handleDeleteUf} dataUf={uf} />
    </div>
  );
};

export default UfList;
