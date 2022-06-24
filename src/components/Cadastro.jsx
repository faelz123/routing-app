import React, {useState} from 'react';

import Button from './Button';
import Input from './Input';

import './Cadastro.css';

const Cadastro = ({handleUfAdd}) => {
    const [inputData, setInputData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
    });

    // const handleInputChange = (e) => {
    //     setInputData(prevState => ({...prevState, [e.target.name]: e.target.value}));
    //     console.log(inputData);
    // }

    const handleUfAddClick = () => {
        if(inputData !== '') {
            handleUfAdd(inputData);
            setInputData('');
        }
    }

    return ( 
        <div className='cadastro-container'>
            <Input setInputData={setInputData} input='input1' label='nome' inputData={inputData}/>
            <Input setInputData={setInputData} input='input2' label='sigla' inputData={inputData}/>
            <Input setInputData={setInputData} input='input3' label='código' inputData={inputData}/>

            <div className='input-container'>
                <Button onClick={handleUfAddClick}>
                    Cadastrar
                </Button>
            </div>
        </div>
     );
}
 
export default Cadastro;