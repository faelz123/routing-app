import React from 'react';

import Uf from './Uf';

const Consulta = ({dataUf}) => {

    if(dataUf) {
        return (
            dataUf.map(uf => <Uf key={uf.codigoUF} uf={uf}/>)
        )
    }
}
 
export default Consulta;