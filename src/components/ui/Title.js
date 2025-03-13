import React from 'react'

export default function Title({ text, color }) {
  return <h1 className={`${color} text-2xl mb-5 text-center`}>{text}</h1>
}
