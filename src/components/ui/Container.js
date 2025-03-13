import React from 'react'

export default function Container({ children }) {
  return (
    <div className="p-5 font-sans max-w-lg m-0 mx-auto text-center">
      {children}
    </div>
  )
}
