import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router> 
      <div className=''>
        <Home />
      </div>
    </Router>
  );
}

export default App;
