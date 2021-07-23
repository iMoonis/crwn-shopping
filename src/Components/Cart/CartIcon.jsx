import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/Cart/cartAction';

import './CartIcon.scss'
import { ReactComponent as ShoppingIcon} from '../../Assets/shoppingIcon.svg'

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
 
export default connect(null, mapDispatchToProps)(CartIcon);