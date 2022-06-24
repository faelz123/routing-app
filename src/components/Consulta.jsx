import React from 'react';


import Uf from './Uf';

const Consulta = ({uf}) => {
    
    // const uf = props.uf

    if(uf) {
        return (
            uf.map(uf => <Uf uf={uf} /> )
        )
    }
}
 
export default Consulta;