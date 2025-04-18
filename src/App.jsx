import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <>




<Navbar />

      <Header />
      <About />
      <Project />
      <Contact />
      <footer className="footer">
        <p>© 2025 Noor | Contact: noor@example.com</p>
      </footer>
    </>
  );
}

export default App;
