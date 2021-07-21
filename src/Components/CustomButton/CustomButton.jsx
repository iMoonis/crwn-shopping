import React from 'react'

import './CustomButton.scss'

const CustomButton = ({children, ...otherButtonPorps}) => {
    return (
        <button className='custom-button' {...otherButtonPorps}>
            {children}
        </button>
    );
}
 
export default CustomButton;