import React from 'react'
import './Leftsidebaroption.css'
function Leftsidebaroption({ active, text, Icon }) {
  return (
    <div className={`leftsidebarOption ${active && "leftsidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
     
    </div>
  )
}

export default Leftsidebaroption