import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Notification.css'; // CSS file for notification styles and animations
import { Link } from 'react-router-dom';
import { useOrderContext } from '../../context/OrderContext';

const Notification = ({id,address}) => {

  const { isLoad,setIsLoad } = useOrderContext()
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  // Function to show the notification
  const show = () => {
        setIsLoad(true);
        setTimeout( () => setIsLoad(false), 4000);
     
  };

  // Function to hide the notification after a certain duration
  const hide = () => {
    setShowNotification(false);
  };

  // Trigger the hide function after 5 seconds (adjust the duration as needed)
  useEffect(() => {
    const timeout = setTimeout(hide, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <CSSTransition
        in={isLoad}
        timeout={300}
        classNames="notification"
        unmountOnExit
        nodeRef={notificationRef}
      >
        <div ref={notificationRef} className="notification">
       
        <p>
            {address}
        </p>
        <Link to={`/dashboard/commandes/${id}/consultation`} type="button"
         className="btn btn-sm btn-primary float-right">
                            <i className="fa fa-eye mr-2"></i>Voir</Link>
        
        </div>
      </CSSTransition>
    </div>
  );
};

export default Notification;