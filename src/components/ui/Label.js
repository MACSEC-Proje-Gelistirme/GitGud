import React from 'react'

export default function Label({ text, color, children }) {
  return (
    <label className={`${color} block text-base mb-1`}>
      {text}
      {children}
    </label>
  )
}
