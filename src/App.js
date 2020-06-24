import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './pages/Main';
import SingleApartment from './pages/SingleApartment';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/apartment' component={SingleApartment} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
