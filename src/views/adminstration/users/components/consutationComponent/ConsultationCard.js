import React, { useEffect, useState } from 'react'
import { get_client_by_id } from '../../../../../axios/axios_client';
import { useParams } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import OrderCard from '../../../../../components/orderCard/OrderCard';
import ClientOrders from './ClientOrders';
import ClientPacks from './ClientPacks';

const ConsultationCard = ({item,details}) => {
  

  return (
  
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="profile-user-box card-box bg-custom">
                    <div className="row">
                        <div className="col-sm-6"><span className="float-left mr-3">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="thumb-lg"/>
                            </span>
                            <div className="media-body text-white">
                                <h4 className="mt-1 mb-1 font-18 text-light">{item?.firstname} {item?.lastname}</h4>
                                <p className="font-14 text-dark">{item?.username}</p>
                        
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-right">
                                <button type="button" className="btn btn-danger waves-effect"><i className="fas fa-trash "></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="row">
            <div className="col-xl-4">
                
                <div className="card-box">
                    <h5 className="header-title text-light mt-0">Informations personnelles:</h5>
                    <div className="panel-body">
                        <hr/>
                        <div className="text-left">
                            <p className="text-light font-13"><strong>Nom et Prenom :</strong> <span className="m-l-15">{item?.firstname} {item?.lastname}</span></p>
                            <p className="text-light font-13"><strong>Telephone :</strong><span className="m-l-15"> {item?.phone}</span></p>
                            <p className="text-light font-13"><strong>Email :</strong> <span className="m-l-15"> {item?.email}</span></p>
                            {/* <p className="text-light font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p> */}
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-layers float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Colis</h6>
                            <h4 className="" data-plugin="counterup">{details.packCount}</h4>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-paypal float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Commandes</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeCount}</span></h4>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-rocket float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Reste</h6>
                            <h4 className="">MAD <span data-plugin="counterup">{item?.amount}</span></h4>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-rocket float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">En cours</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeN1}</span></h4>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-rocket float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Livree</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeLivree}</span></h4>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-rocket float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Retour</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeRetour}</span></h4>
                        </div>
                    </div>
                    
                </div>
                <div className="card-box">
                        

                    <Tabs>
                        <Tab eventKey="home" title="Colis" className='py-5' >
                            {item.id &&  <ClientPacks id={item.id}/> }
                        </Tab>
                        <Tab eventKey="profile" title="Commandes">
                            {item.id && <ClientOrders id={item.id}/> } 
                        </Tab>
                       
                    </Tabs>

                </div>
               
            </div>
       </div>
        
    </div>
  

  )

}

export default ConsultationCard
