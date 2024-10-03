import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
                                    <> 
                                      <Header/>
                                      <About/> 
                                      <Footer/>
                                    </>
                                  }/>
          <Route path="/Dashboard" element={<><Header/><Dashboard/></>} />
          <Route path="/users" element={<><Header/><Home/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
