import React from 'react'

export default function Button({ onClick, text, bgcolor, tcolor }) {
  return (
    <button
      className={`${bgcolor} ${tcolor} px-5 py-2 text-base border-0 rounded cursor-pointer mt-2 mb-4`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
