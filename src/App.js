import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import OneBedroom from './pages/OneBedroom';
import TwoBedroom from './pages/TwoBedroom';
import ThreeBedroom from './pages/ThreeBedroom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/one-bedroom' component={OneBedroom} />
        <Route exact path='/two-bedroom' component={TwoBedroom} />
        <Route exact path='/three-bedroom' component={ThreeBedroom} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
