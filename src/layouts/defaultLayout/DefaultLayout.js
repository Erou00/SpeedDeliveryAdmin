import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useStateContext } from '../../context/ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DefaultLayout() {
    const {user, token, setUser, setToken, username} = useStateContext();
    
    if (!token) {
        return <Navigate to="/login" />
        }
    return (
        <div id="page-top">
         <ToastContainer />
        <div id="wrapper">
            <Sidebar/>

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">
                    <Navbar/>         
                    <Outlet/>
                
                </div>
            </div>


        </div>



        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>

        
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DefaultLayout