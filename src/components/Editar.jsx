import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";
import Consulta from "./Consulta";

import "./Editar.css";

const Editar = ({ uf, setUf, inputData, setInputData }) => {

  const params = useParams();
  const history = useNavigate();

  const newUf = uf.filter((uf) => uf.sigla === params.siglaUF);

  const handleBackButton = () => {
    history(-1);
}


  const handleUfEdit = (ufSigla) => {
    const editedUf = uf.map(uf => {
        console.log(uf)
        if (uf.sigla === ufSigla){
            return {...uf, nome: inputData.input1, sigla: inputData.input2, codigoUF: parseInt(inputData.input3)};
        }
        return uf;
    })
    setUf(editedUf);
    history(`/uf/${inputData.input2}`)
    setInputData('');
  }

  return (
    <>
      <div className="editar-inputs-container">
        <Input
          setInputData={setInputData}
          label={newUf[0].nome}
          input="input1"
          inputData={inputData}
        />
        <Input
          setInputData={setInputData}
          label={newUf[0].sigla}
          input="input2"
          inputData={inputData}
        />
        <Input
          setInputData={setInputData}
          label={newUf[0].codigoUF}
          input='input3'
          inputData={inputData}
        />
        <div>
          <Button onClick={() => handleUfEdit(params.siglaUF)}>Alterar</Button>
        </div>
      </div>
      <Consulta dataUf={newUf} />
      <Button onClick={handleBackButton}>Voltar</Button>
    </>
  );
};

export default Editar;
