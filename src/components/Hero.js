import React from 'react';
import {useTheme} from './ThemeContext';

const Hero = () => {
  const { isLightMode } = useTheme();
  return (
    <section className={`hero ${isLightMode ? 'light-mode' : 'dark-mode'}`} id="hero-section">
      <h1>Welcome to GitGud(gui)</h1>
      <p>GitGud(gui) is a simple git gui that allows you to manage your git repositories with ease.</p>
      <p>It is built using Electron and Node.js.</p>
      <button id="cta-button">Get Started</button>
    </section>
  );
};

export default Hero; 