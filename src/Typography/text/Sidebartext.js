import React from 'react'

const Sidebartext = ({text,className}) => {
  return (
    <p className={`Sidebar ${className}`}>{text}</p>
  )
}

export default Sidebartext