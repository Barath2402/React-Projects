// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Ensure Switch is imported correctly
import Home from './components/Home';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
