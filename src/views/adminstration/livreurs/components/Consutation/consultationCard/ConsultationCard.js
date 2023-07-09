import React, { useEffect, useState } from 'react'
import './consultationCard.css'
import OrderCard from '../../../../../../components/orderCard/OrderCard'
import LivreurCommandes from '../livreurCommandes/LivreurCommandes'
import { useParams } from 'react-router-dom'
import { get_livreur_by_id, get_livreur_details } from '../../../../../../axios/axios_livreur'

const ConsultationCard = () => {

    let {id} = useParams();
   
    const [livreur,setLivreur] = useState({})
    const [details,setDetails] = useState({})

    const getLivreur = async() => {
        await get_livreur_by_id(id).then(({data})=>{
            console.log(data);
            setLivreur(data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getLivreurDetails = async () => {
        await get_livreur_details(id).then(({data})=>{
            console.log(data);
            setDetails(data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
       getLivreur()
       getLivreurDetails()
    },[])

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
                                <h4 className="mt-1 mb-1 font-18 text-light">{livreur.firstname} {livreur?.lastname}</h4>
                                <p className="font-14 text-dark">{livreur.username}</p>
                        
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
                            <p className="text-light font-13"><strong>Nom et Prenom :</strong> <span className="m-l-15">{livreur.firstname} {livreur?.lastname}</span></p>
                            <p className="text-light font-13"><strong>Mobile :</strong><span className="m-l-15">{livreur.phone}</span></p>
                            <p className="text-light font-13"><strong>Email :</strong> <span className="m-l-15">{livreur.email}</span></p>
                            {/* <p className="text-light font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p> */}
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-xl-8">
                <div className="row">
                    <div className="col-sm-4">

                        <div className="card-box tilebox-one"><i className="icon-layers float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Commandes</h6>
                            <h4 className="" data-plugin="counterup">{details.commandeAffected}</h4>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-paypal float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">En cours</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeEnCours}</span></h4>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-paypal float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Livree</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeLivree}</span></h4>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-paypal float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Retour</h6>
                            <h4 className=""><span data-plugin="counterup">{details.commandeRetour}</span></h4>
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <div className="card-box tilebox-one"><i className="icon-rocket float-right text-light"></i>
                            <h6 className="text-light text-uppercase mt-0">Reste</h6>
                            <h4 className="">MAD <span data-plugin="counterup">{livreur.amount}</span></h4>
                        </div>
                    </div>
                    
                </div>
            
               
            </div>
        </div>

        <div className='row'>
       
       <LivreurCommandes id={id} />
         
        </div>
        
    </div>
  
  )
}

export default ConsultationCard