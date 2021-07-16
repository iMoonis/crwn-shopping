import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={Shop}/>
    </Switch>
  );
}

export default App;
