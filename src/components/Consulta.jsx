import React from 'react';

import Uf from './Uf';

const Consulta = ({dataUf, handleUfRemove}) => {

    if(dataUf) {
        return (
            dataUf.map(uf => <Uf key={uf.codigoUF} uf={uf} handleUfRemove={handleUfRemove}/>)
        )
    }
}

export default Consulta;