import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
