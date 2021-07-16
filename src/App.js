import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './Pages/Homepage';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
    </Switch>
  );
}

export default App;
