import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/Cart/cartAction";
import { selectCartItemsCount } from "../../Redux/Cart/cartSelectors";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/shoppingIcon.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
