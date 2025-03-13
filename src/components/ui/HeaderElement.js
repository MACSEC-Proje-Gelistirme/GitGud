import React from 'react'

export default function HeaderElement({ children, href }) {
  return (
    <li className="ml-5 relative">
      <a
        className="no-underline text-white font-medium font-sans duration-300 ease-in-out px-1 py-2 rounded-lg hover:text-blue-300 hover:bg-blue-200 hover:bg-opacity-10 hover:scale-110 rotate-6 before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#61dafb] before:to-[#3b9eff] before:scale-x-0 before:origin-right before:transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:before:origin-left"
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
