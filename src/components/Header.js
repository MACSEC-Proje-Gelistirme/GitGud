import React from 'react'
import HeaderElement from './ui/HeaderElement'

const Header = () => {
  return (
    <header className="bg-[#282c34] p-4 px-5 shadow-sm">
      <nav className="flex justify-between items-center p-4 px-7 bg-[#282c34] rounded-xl shadow-lg sticky top-0 z-[1000]">
        <div className="text-3xl text-blue-400 font-bold font-helvetica-cursive">
          GitGud(gui)
        </div>
        <ul className="list-none flex gap-5 m-0 p-0">
          <HeaderElement href="/">Home</HeaderElement>
          <HeaderElement href="/repositories">Repositories</HeaderElement>
          <HeaderElement href="/settings">Settings</HeaderElement>
        </ul>
      </nav>
    </header>
  )
}

export default Header
