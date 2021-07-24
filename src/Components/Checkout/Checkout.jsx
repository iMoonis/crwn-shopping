import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../Redux/Cart/cartSelectors";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

import "./Checkout.scss";

const Checkout = ({cartItems, total}) => {
  return (
    <div className="checkout-page">
      <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Pirce</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
      </div>
      {
          cartItems.map(cartItem => <CheckoutItem key={cartItem.key} cartItem={cartItem} />)
      }
      <div className="total">
          <span>Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
