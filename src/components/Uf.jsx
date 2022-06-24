import React from 'react';



const Uf = ({uf}) => {

    return ( 
        <div>
            {(`${uf.codigoUF} - ${uf.nome} - ${uf.sigla}`)}
        </div>
     );
}
 
export default Uf;