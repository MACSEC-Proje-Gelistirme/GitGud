import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section className="relative mt-5 p-20 text-center text-white bg-gradient-to-br from-[#61dafb] to-[#3b9eff] rounded-xl shadow-lg overflow-hidden">
      <h1 className="relative z-2 text-3xl font-bold mb-5 font-helvetica-cursive text-shadow-lg">
        Welcome to GitGud(gui)
      </h1>
      <p className="relative z-2 text-lg mb-7 font-helvetica-cursive leading-relaxed">
        GitGud(gui) is a simple git gui that allows you to manage your git
        repositories with ease.
      </p>
      <p className="relative z-2 text-lg mb-7 font-helvetica-cursive leading-relaxed">
        It is built using Electron and Node.js.
      </p>
      <a href="/GitPush">
        <Button text="Get Started" bgcolor="bg-gray-500" tcolor="text-white" />
      </a>
    </section>
  )
}

export default Hero
