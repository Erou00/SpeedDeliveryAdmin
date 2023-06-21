import React from 'react'
import ShowImage from '../../../../components/showImage/ShowImage'
import { Link } from 'react-router-dom'

const ClientCard = ({item}) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="card livreur-card">

                <div className="card-body">
                    <div className="bg-header">
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            
                        <ShowImage imageName={item.image} height={50} nClass={'img-thumbnail'} width={50}
                         optionalImage={"https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg"}/>
                           
                            </div>
                        <div className="flex-1 ms-3">

                            <span className="badge badge-soft-success username">{item.username}</span>
                            <h5 className="font-size-16 ml-2"><a href="#" className="text-dark">{`${item.firstname} ${item.lastname}`}</a></h5>
                            
                        </div>
                    </div>

                    <div className="mt-3 d-flex justify-content-between pt-1">
                        <p className="mb-0 text-center">
                           100 <i className="fas fa-box font-size-15 align-middle pr-2 ml-1 text-primary"></i><br/>
                             Commandes</p>
                        <p className="mb-0">
                            120<i className="fas fa-check font-size-15 align-middle pr-2 ml-1 text-primary"></i><br/>
                             Livrées</p>
                        <p className="mb-0">
                            478<i className="fas fa-history alt font-size-15 align-middle pr-2 ml-1 text-primary"></i><br/>
                            Le reste</p>
                    </div>

                    <div className="mt-3 pt-1">
                        <p className="text-muted mb-0">
                            <i className="fas fa-phone-alt font-size-15 align-middle pr-2 text-primary"></i> {item.phone}
                        </p>
                        <p className="text-muted mb-0 mt-2">
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

export default ClientCard
