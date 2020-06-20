import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import Blog from './components/Blog';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <Route exact path="/" component={Home} />

      <Route path="/blog" component={Blog} />
    </div>
  );
}

export default App;
