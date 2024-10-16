import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Instructors from './pages/Team';
import Workshops from './pages/Workshops';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/workshops" element={<Workshops />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
