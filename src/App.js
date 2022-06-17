import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-TM0H1SBQSN';
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
