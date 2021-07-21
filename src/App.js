import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Signin_Signup from './Pages/Signin_Signup/Signin_Signup';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={Signin_Signup} />
      </Switch>
    </div>
  );
}

export default App;
