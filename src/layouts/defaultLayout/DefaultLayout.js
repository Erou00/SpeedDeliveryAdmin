import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useStateContext } from '../../context/ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OrderProvider } from '../../context/OrderContext';
import DefaultCard from '../../views/adminstration/DefaultCard';


function DefaultLayout() {
    const {user, token, setUser, setToken, username,signOut} = useStateContext();
    
    const navigate = useNavigate();
    const Logout = () => {
        signOut();
        window.location.reload(true)
    }
    if (!token) {
        return <Navigate to="/login" />
        }
    return (
        <>
        <OrderProvider>
            <ToastContainer />
            <div id="page-top">
            <div id="wrapper">
                <Sidebar/>

                <DefaultCard/>


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
                            <button className="btn btn-primary" onClick={Logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </OrderProvider>
        </>
    )
}

export default DefaultLayout