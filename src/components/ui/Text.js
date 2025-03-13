import React from 'react'

export default function Text({ color, text }) {
  return <p className={`${color} mt-2 font-sans text-base`}>{text}</p>
}
