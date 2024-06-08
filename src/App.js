// App.js

import './App.css';
import Home from './components/Home';
import Load from './components/Load';
import Star from './components/Star';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Duration to show the loading screen

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="App">
      <Star /> {/* Render Star component outside Router */}
      {loading ? (
        <Load />
      ) : (
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
