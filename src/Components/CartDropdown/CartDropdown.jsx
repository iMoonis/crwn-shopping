import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/Cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../Redux/Cart/cartAction";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden())
      }}>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
