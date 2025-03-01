import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Features />
              </main>
            } />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;