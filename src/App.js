import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/" element={<Shop/>} exact ></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
