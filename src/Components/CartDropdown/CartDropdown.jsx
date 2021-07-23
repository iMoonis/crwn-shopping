import React from 'react'

import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
}
 
export default CartDropdown;