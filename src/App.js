import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const PagGorras = () => (
  <div>
    <h1>Gorras</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/gorras' component={PagGorras}/>
      </Switch>
      
    </div>
  );
}

export default App;
