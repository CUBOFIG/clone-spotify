import React from 'react'
import './SidebarOption.scss'

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
