import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/css/App.css';
import Home from './components/Home';
import Weather from './components/Weather';
import About from './components/About';
import NavBar from './components/Navbar';



function App() {
  return (
    <Router>
      <NavBar />
      <div >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
