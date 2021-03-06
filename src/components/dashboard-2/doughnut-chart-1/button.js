import React from 'react'

const Button = ({onClick, text}) => (
  <div className="dropdown-item w-full">
    <button
      onClick={onClick}
      className="font-normal w-full text-left px-3 py-2">
      {text}
    </button>
  </div>
)

export default Button
