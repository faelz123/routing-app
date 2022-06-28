import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'

import './Uf.css'

const Uf = ({uf}) => {

    
    const history = useNavigate();
    const params = useParams();

    console.log(Object.keys(params))

    const handleUfInfo = () => {
        history(`/uf/${uf.sigla}`)
    }

    
    return ( 
        <div className='uf-container'> 
            {(`${uf.codigoUF} - ${uf.nome} - ${uf.sigla}`)}
            {Object.keys(params).length === 0 && <>
                <button onClick={handleUfInfo}>
                e
                </button>
            </>}
        </div>
     );
}
 
export default Uf;