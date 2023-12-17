import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
