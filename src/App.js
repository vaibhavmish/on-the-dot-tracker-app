import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
