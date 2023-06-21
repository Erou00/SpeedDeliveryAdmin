import React from 'react'
import { Link } from 'react-router-dom'

function SidebarItem({menu}) {
  return (
    <li className="nav-item">
        <Link to={menu.key} className='nav-link'>
          <i className={menu.icon}></i>
          {menu.title}
        </Link>
    </li>
  )
}

export default SidebarItem