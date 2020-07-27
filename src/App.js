import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Views/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Header />
         <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Header" component={Header} />
              <Route exact path="/Footer" component={Footer} />
            </Switch>
          </div>
  

        </Router>
         <Footer />
      </div>
    </div>
  );
}

export default App;
