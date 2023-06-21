import React from 'react'
import { Outlet } from 'react-router-dom'
// import './guestLayout.css';

function GuestLayout() {
  return (
    <div id="guestLayout">
        <Outlet/>
    </div>
  )
}

export default GuestLayout