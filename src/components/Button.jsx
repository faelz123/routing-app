import React from 'react';

import './Button.css'


const Button = ({children, onClick}) => {
    return ( 
        <button className='button-container' onClick={onClick}>
            {children}
        </button>
     );
}
 
export default Button;