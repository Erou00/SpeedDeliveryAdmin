import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useOrderContext } from '../../context/OrderContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import Notification from '../../components/notification/Notification'

const DefaultCard = () => {



  return (
    <div id="content-wrapper" className="d-flex flex-column">

            <div id="content"> 
                <Navbar/>         
                <Outlet/>
            
            </div>
          
           
           
    
          
        </div>
  )
}

export default DefaultCard
