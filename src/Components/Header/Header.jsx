import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../Firebase/Firebase.utils";
import { selectCartHidden } from "../../Redux/Cart/cartSelectors";
import { selectCurrentUser } from "../../Redux/User/userSelector";

import "./header.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../Cart/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to="signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
