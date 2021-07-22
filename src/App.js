import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import Homepage from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Signin_Signup from "./Pages/Signin_Signup/Signin_Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            CurrentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({CurrentUser: userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header CurrentUser={this.state.CurrentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Signin_Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
