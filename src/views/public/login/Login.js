import React, { createRef, useState } from 'react'
import { useStateContext } from '../../../context/ContextProvider';
import {user_login} from '../../../axios/axios_request';
import { Navigate, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


const Login = () => {

  
  const usernameRef = createRef();
  const passwordRef = createRef();

  const { token,setToken } = useStateContext()
  const [message, setMessage] = useState(null)
  const navigate = useNavigate();
  const onSubmit = (ev) => {
    ev.preventDefault()


      const payload = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        grantType:"password"
      }

        user_login(payload)
          .then((data) => {
            if (data.status === 401) {
              setMessage(data.message)
              return;
            }
            let decodeToken = jwtDecode(data.data.accessToken)
            if (decodeToken.scope === "ROLE_ADMIN" ) {
               setToken(data.data.accessToken)
               navigate("/dashboard");
            }else{
              setMessage("Bad credential")
            }
           
          }).catch(err => {
            console.log(err);
            const response = err.response;
            if (response && response.status === 401) {
              setMessage(response.data.message)
            }
          })
  }

  if (token) {
    return <Navigate to="/" />
  }
  
  return (
    <div className="bg-gradient-primary" style={{minHeight:'100vh'}}>

      <div className="container">
          <div className="row justify-content-center">

              <div className="col-xl-10 col-lg-12 col-md-9">

                  <div className="card o-hidden border-0 shadow-lg my-5">
                      <div className="card-div p-0">
                          <div className="row">
                              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                              <div className="col-lg-6">
                                  <div className="p-5">
                                      <div className="text-center">
                                          <h1 className="h4 text-gray-900 mb-4">Connectez-vous à votre compte</h1>
                                      </div>
                                      <form className="user" onSubmit={onSubmit}>

                                        

                                          <div className="form-group">
                                              <input ref={usernameRef} type="text" className="form-control form-control-user"
                                                aria-describedby="emailHelp"
                                                placeholder="Username"/>
                                                {message &&   
                                                      <p className='text-danger text-center'><strong>{message}</strong></p>
                                                }
                                          </div>
                                          <div className="form-group">
                                              <input ref={passwordRef} type="password" className="form-control form-control-user"
                                                  id="exampleInputPassword" placeholder="Mot de passe"/>
                                          </div>
                                          <div className="form-group">
                                              <div className="custom-control custom-checkbox small">
                                                  <input type="checkbox" className="custom-control-input" 
                                                  id="customCheck"/>
                                                 
                                              </div>
                                          </div>
                                          <button className="btn btn-primary btn-user btn-block">
                                              Se connecter
                                          </button>
                                          <hr/>
                                        
                                      </form>
                                      <hr/>
                                      <div className="text-center">
                                          {/* <a className="small" href="forgot-password.html">Forgot Password?</a> */}
                                      </div>
                                    
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

      </div>


    </div>
  )
}

export default Login
