import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItem from './sidebarItem/SidebarItem'
import SidebarDropdown from './sidebarDropdown/SidebarDropdown'
import MenuItem from './MenuItem'


function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SD Admin</div>
            </a>

            <hr className="sidebar-divider my-0"/>

        
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

          
            <hr className="sidebar-divider"/>

     
            <div className="sidebar-heading">
                Menu
            </div>
            
             {MenuItem.map(menu => (
                <SidebarItem menu={menu} key={menu.key}/>
             ))}
             


            <hr className="sidebar-divider"/>

        

            <SidebarDropdown/>

       

          


        </ul>
  )
}

export default Sidebar