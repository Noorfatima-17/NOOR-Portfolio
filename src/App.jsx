import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />

      <footer className="footer">
        <p>© 2025 Noor | Contact: noor@example.com</p>
      </footer>
    </>
  );
}

export default App;
