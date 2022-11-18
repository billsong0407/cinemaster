import React from 'react'
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import HomePage from "./pages/HomePage"
import SeatSelectionPage from "./pages/SeatSelectionPage"
import MovieSelectionPage from "./pages/MovieSelectionPage"
import CheckoutPage from "./pages/CheckoutPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/movies" component={MovieSelectionPage} exact={true}/>
            <Route path="/seats" component={SeatSelectionPage} exact={true}/>
            <Route path="/checkout" component={CheckoutPage} exact={true}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
