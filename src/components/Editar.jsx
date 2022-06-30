import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";
import Consulta from "./Consulta";

import "./Editar.css";

const Editar = ({ uf, setUf, inputData, setInputData }) => {

  const params = useParams();
  const history = useNavigate();
  console.log(params);

  // console.log('editar',uf)
  // console.log('editar',params)

  const newUf = uf.filter(
    (uf) =>
      uf.sigla === params.ufselect || uf.codigoUF === parseInt(params.ufselect)
  );
  // console.log(newUf)

  const handleBackButton = () => {
    history(`/uf`);
  };

  // const editedUf = uf.map((uf) => {
  //   if (uf.codigoUF === ufCod) {
  //     ufAlterar = {
  //       codigoUF: ufCod,
  //       sigla: inputData.input2,
  //       nome: inputData.input1,
  //       status: parseInt(inputData.input3)
  //     }
  //   }
  //   return uf;
  // });

  // if (editedUf[0].codigoUF === ufCod) {
  //   ufAlterar = {
  //     codigoUF: ufCod,
  //     sigla: inputData.input2,
  //     nome: inputData.input1,
  //     status: parseInt(inputData.input3)
  //   }
  // }
  const handleEditUf = (ufCod) => {
    let ufAlterar = null;
    const editedUf = uf.filter((uf) => uf.codigoUF === ufCod);

    editedUf[0].codigoUF === ufCod &&
      (ufAlterar = {
        codigoUF: ufCod,
        sigla: inputData.input2,
        nome: inputData.input1,
        status: parseInt(inputData.input3),
      });
    // console.log(editedUf);
    // console.log(ufAlterar);
    const alterarUf = async () => {
      const { data } = await axios.put("http://localhost:3333/uf", ufAlterar);
      console.log(data);
      setUf(data.sort().reverse());
    };
    alterarUf();
    history(`/uf`);
  };

  // const handleUfEdit = (ufCod) => {
  //   const editedUf = uf.map(uf => {
  //       console.log(uf)
  //       if (uf.codigoUF === ufCod){
  //           return {...uf, nome: inputData.input1, sigla: inputData.input2, codigoUF: parseInt(inputData.input3)};
  //       }
  //       return uf;
  //   })
  //   setUf(editedUf);
  //   history(`/uf/${inputData.input2}`)
  //   setInputData('');
  // }

  if (!newUf.length) {
    return <h2>Loading...</h2>;
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
          label={newUf[0].status}
          input="input3"
          inputData={inputData}
        />
        <div>
          <Button onClick={() => handleEditUf(parseInt(params.ufselect))}>
            Alterar
          </Button>
        </div>
      </div>
      <Consulta dataUf={newUf} />
      <Button onClick={handleBackButton}>Voltar</Button>
    </>
  );
};

export default Editar;
