import React from 'react';

import Uf from './Uf';

const Consulta = ({dataUf, handleUfRemove, handleDeleteUf}) => {

    if(dataUf) {
        return (
            dataUf.map(uf => <Uf key={uf.codigoUF} uf={uf} handleDeleteUf={handleDeleteUf}/>)
        )
    }
}

export default Consulta;