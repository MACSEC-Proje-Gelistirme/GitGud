import React from 'react'
import Card from './ui/Card'

const Features = () => {
  return (
    <section className="text-center mt-12">
      <h2>Features</h2>
      <div className="flex flex-wrap justify-around gap-2">
        <Card
          h3_text="Easy Repository Management"
          p_text="Manage all your Git repositories in one place with a simple and intuitive interface."
        />
        <Card
          h3_text="Real-Time Updates"
          p_text="Get real-time updates on your repository status, branches, and commits."
        />
        <Card
          h3_text="Customizable Themes"
          p_text="Choose from a variety of themes to personalize your GitGud(gui) experience."
        />
      </div>
    </section>
  )
}

export default Features
