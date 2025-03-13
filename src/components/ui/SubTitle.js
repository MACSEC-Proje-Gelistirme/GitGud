import React from 'react'

export default function SubTitle({ text, color }) {
  return <h1 className={`${color} text-lg mb-3`}>{text}</h1>
}
