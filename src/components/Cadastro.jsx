import React from 'react';

import Button from './Button';
import Input from './Input';

import './Cadastro.css';

const Cadastro = ({handleUfAdd, inputData, setInputData}) => {
    
      const handleUfAddClick = () => {
        if (inputData !== "") {
          handleUfAdd(inputData);
          setInputData("");
        }
      };

    return ( 
        <>
        <div className='cadastro-container'>
            <Input inputData={inputData}  setInputData={setInputData} input='input1' label='nome' />
            <Input inputData={inputData}  setInputData={setInputData} input='input2' label='sigla'/>
            <Input inputData={inputData}  setInputData={setInputData} input='input3' label='código'/>
            
            <div className='input-container'>
                <Button onClick={handleUfAddClick}>
                    Cadastrar
                </Button>
            </div>
        </div>
        {/* {handlePessoaAdd !== undefined && <div className='cadastro-container'>
                <Input setInputData={setInputData} input='input4' label='login' inputData={inputData}/>
                <Input setInputData={setInputData} input='input5' label='senha' inputData={inputData}/>
            </div>
            } */}
        </>
     );
}
 
export default Cadastro;