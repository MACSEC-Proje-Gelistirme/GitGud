import React from 'react'

export default function Card({ h3_text, p_text }) {
  return (
    <div className="relative w-[30%] mb-5 p-8 text-center text-white bg-gradient-to-br from-[#3064bf] to-[#4285f4] rounded-2xl border-2 border-white/10 shadow-lg transition-all duration-400 ease-in-out hover:translate-y-[-15px] hover:scale-105 hover:rotate-5 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#4285f4] hover:to-[#34a853] overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%] before:bg-radial-gradient before:from-white/20 before:to-transparent before:rounded-full before:transition-all before:duration-600 before:ease before:transform before:-translate-x-1/2 before:-translate-y-1/2 hover:before:w-0 hover:before:h-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/10 after:opacity-0 after:transition-opacity after:duration-400 after:ease hover:after:opacity-100">
      <h3 className="text-[#61dafb] text-xl mb-2">{h3_text}</h3>
      <p className="text-lg relative z-3 transition-all duration-400 ease-in-out hover:translate-y-4 hover:opacity-90">
        {p_text}
      </p>
    </div>
  )
}
