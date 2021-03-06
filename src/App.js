import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // tracking id from Google
    const TRACKING_ID = 'UA-232344407-2';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
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
