import React from 'react'
import './livreurCard.css'
import { Link } from 'react-router-dom'
import ShowImage from '../../../../components/showImage/ShowImage'



const LivreurCard = ({item}) => {
  return (
 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="card livreur-card">

                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div>

                           { item.image ?
                             <ShowImage imageName={item.image} height={60} nClass={'img-thumbnail'} width={60}
                         optionalImage={"https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg"}/>
                          
                         :

                         <img src="https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg" className='img-thumbnail' alt="Displayed Image" width={60} height={60} 
                         style={{ imageRendering: 'pixelated'}}/>
                           } 

                           
                        
                            </div>
                        <div className="flex-1 ms-3">

                            <span className="badge badge-soft-success username text-uppercase">{item.username}</span>
                            <h5 className="font-size-16 ml-2 text-uppercase">{`${item.firstname} ${item.lastname}`}</h5>
                            
                        </div>
                    </div>

                  

                    <div className="mt-3 pt-1">
                        <p className="text-muted mb-0">
                            <i className="fas fa-phone-alt font-size-15 align-middle pr-2 text-primary"></i> {item.phone}
                        </p>
                        <p className="text-muted mb-0 mt-0">
                            <i className="far fa-envelope-open font-size-15 align-middle pr-2 text-primary"></i> {item.email}
                        </p>
                    </div>
                    <div className="d-flex gap-2 pt-4">
                        <Link to={`${item.id}/consultation`} type="button" className="btn bg-soft-success btn-sm w-50 text-primary">
                            <i className="fas fa-certificate me-1"></i> Consulter</Link>
                        <button type="button" className="btn btn-danger btn-sm w-50"><i className="fas fa-trash mr-1"></i> Delete</button>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default LivreurCard