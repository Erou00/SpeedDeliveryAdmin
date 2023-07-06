import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import { useParams } from 'react-router-dom'
import {  get_commande_by_id } from '../../../axios/axios_commande'
import ShowImage from '../../../components/showImage/ShowImage'
import Affectation from './components/Affectation'

const CommandeConsultation = props => {

  let { id } = useParams();
  const [commande,setCommande] = useState({});


  const getCommande = async()=>{
    await get_commande_by_id(id).then(({data})=>{
      setCommande(data.data)
      if (data.data.livreur) {
      }
    }).catch(err => { 
      console.log(err);
    })
  }





  useEffect(()=>{
    getCommande();
  },[])

  return (
    <>
     <PageTitle createBtn={false} title={'Commandes'}>
        <li aria-current="page" className="breadcrumb-item active text-uppercase">Consultation</li>
      </PageTitle>
      <DefaultCard title={''} createBtn={false}>

        <div className="container ">

          <div className="row mb-4">
            <div className="col-md-6">
                <div className="d-flex mb-4">
                    <div>
                      {commande.pack && commande.pack.image && <ShowImage imageName={commande.pack.image} height={120} width={120}/>}
                    </div>
                    <div>
                        {commande.pack && 
                        <div>
                          <label className='ml-2 p-0 my-0'><strong className='text-primary'>Colis:</strong> {commande.pack.name}</label><br/>
                          <label className='ml-2 p-0 my-0'><strong className='text-primary'>Quantite:</strong> {commande?.pack.quantite}</label><br/>
                          <label className='ml-2 p-0 my-0'><strong className='text-primary'>Prix Unitaire:</strong> {commande?.pack.prixUnitaire} MAD</label><br/>

                        </div>
                        }
                        

                    </div>
                </div>
                {commande.client && 
                    <div>
                        <label><strong className='text-primary'>Proprietaire : </strong>{commande.client && commande.client.firstname} {commande.client.lastname}</label><br/>
                        <label><strong className='text-primary'>Proprietaire Telephone : </strong>{commande.client.phone}</label><br/>
                    </div>
                        }
                        
                <label><strong className='text-primary'><i className="fas fa-map-marker-alt"></i>Adresse du commande :
                </strong> {commande.address}
            </label><br/>



            </div>
            <div className="col-md-6">

                <label><strong className='text-primary'><i className="fas fa-phone-square-alt mr-1"></i>Telephone du commande: </strong>{commande.phone}</label><br/>

              

                <label><strong className='text-primary'><i className="fas fa-tags mr-1"></i>Prix: </strong>{commande.price} MAD</label><br/>
                <label><strong className='text-primary'><i className="fas fa-calendar-day mr-1"></i>Date de creation  : </strong>{commande.creationDate}</label><br/>
                <label><strong className='text-primary'><i className="fas fa-boxes mr-1"></i>Quantite: </strong>{commande.quantite}</label>
            </div>
          </div>




          {commande.livreur &&
          <Affectation  com_id={commande.id} 
          com_liv={commande.livreur.id} />
           
          }

          {!commande.livreur &&
                    <Affectation  com_id={commande.id} 
                    com_liv={''} />
                    
                    }
          


        




        </div>

      
      </DefaultCard>
       
       
        </>
      )
    }



    export default CommandeConsultation
