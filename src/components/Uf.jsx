import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'

import './Uf.css'

const Uf = ({uf, handleUfRemove, handleDeleteUf}) => {

    
    const history = useNavigate();
    const params = useParams();

    // console.log(Object.keys(params))

    const handleUfInfo = () => {
        history(`/uf/${uf.codigoUF}`)
    }

    
    return ( 
        <div className='uf-container'> 
            {(`${uf.codigoUF} - ${uf.nome} - ${uf.sigla}`)}
            {Object.keys(params).length === 0 && <>
                <div className='uf-buttons'>
                <button className='uf-edit-button' onClick={handleUfInfo}>
                E
                </button>
                <button className='uf-remove-button' onClick={()=> handleDeleteUf(uf.codigoUF)}>
                X
                </button>
                {/* <button className='uf-remove-button' onClick={()=> handleUfRemove(uf.sigla , uf.codigoUF)}>
                X
                </button> */}
                </div>
            </>}
        </div>
     );
}
 
export default Uf;