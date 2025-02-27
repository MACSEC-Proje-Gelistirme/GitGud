import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Easy Repository Management</h3>
          <p>Manage all your Git repositories in one place with a simple and intuitive interface.</p>
        </div>
        <div className="card">
          <h3>Real-Time Updates</h3>
          <p>Get real-time updates on your repository status, branches, and commits.</p>
        </div>
        <div className="card">
          <h3>Customizable Themes</h3>
          <p>Choose from a variety of themes to personalize your GitGud(gui) experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features; 