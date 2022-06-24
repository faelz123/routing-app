import React, {useState} from 'react';

import Button from './Button';

import './Cadastro.css';

const Cadastro = ({handleUfAdd}) => {
    const [inputData, setInputData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
    });

    const handleInputChange = (e) => {
        setInputData(prevState => ({...prevState, [e.target.name]: e.target.value}));
        console.log(inputData);
    }

    const handleUfAddClick = () => {
        if(inputData !== '') {
            handleUfAdd(inputData);
            setInputData('');
        }
    }

    return ( 
        <div className='cadastro-container'>
            <div>
                <input 
                    name='input1'
                    type='text' 
                    placeholder='nome' 
                    size='15'
                    onChange={handleInputChange}
                    value={inputData.input1}
                />
            </div>
            <div className='input-container'>
                <input 
                    name='input2'
                    type='text'
                    placeholder='sigla' 
                    size='15'
                    onChange={handleInputChange}
                    value={inputData.input2}
                />
            </div>
            <div className='input-container'>
                <input 
                    name='input3'
                    type='text' 
                    placeholder='código' 
                    size='15'
                    onChange={handleInputChange}
                    value={inputData.input3}
                />
            </div>
            <div className='input-container'>
                <Button onClick={handleUfAddClick}>
                    Cadastrar
                </Button>
            </div>
        </div>
     );
}
 
export default Cadastro;