import React from 'react'

import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherButtonPorps}) => {
    return (
        <button className={`${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherButtonPorps}>
            {children}
        </button>
    );
}
 
export default CustomButton;