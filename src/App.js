import React from 'react'
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import HomePage from "./pages/HomePage"
import SeatSelectionPage from "./pages/SeatSelectionPage"
import MovieSelectionPage from "./pages/MovieSelectionPage"
import CheckoutPage from "./pages/CheckoutPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/movies" element={<MovieSelectionPage/>}/>
            <Route exact path="/seats" element={<SeatSelectionPage/>}/>
            <Route exact path="/checkout" element={<CheckoutPage/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
