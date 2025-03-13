import React from 'react'

export default function TextInput({ color, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${color} w-full p-2 text-base rounded-md mt-2 mb-2`}
    />
  )
}
