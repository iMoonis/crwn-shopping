import React from 'react'

import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherButtonPorps}) => {
    return (
        <button className={`${inverted ? 'inverted' : '' } ${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherButtonPorps}>
            {children}
        </button>
    );
}
 
export default CustomButton;