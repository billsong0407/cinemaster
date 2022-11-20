import React from 'react'
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import HomePage from "./pages/HomePage"
import SeatSelectionPage from "./pages/SeatSelectionPage"
import MovieSelectionPage from "./pages/MovieSelectionPage"
import CheckoutPage from "./pages/CheckoutPage"
import { BrowserRouter, HashRouter,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/movies" component={MovieSelectionPage}/>
            <Route path="/seats" component={SeatSelectionPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
          </Switch>
      </HashRouter>
      </div>
  );
}

export default App;
