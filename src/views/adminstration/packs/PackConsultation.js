import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import { Link, useParams } from 'react-router-dom'
import { change_pack_status, get_all_packs_status, get_pack_by_id } from '../../../axios/axios_pack'
import ShowImage from '../../../components/showImage/ShowImage'
import { toast } from 'react-toastify'
import PackCommandes from './components/PackCommandes'

const PackConsultation = () => {

  const { id } = useParams()

  const [pack,setPack] = useState({})
  const [status,setStatus] = useState([])

  const getPack = async() => {
   await get_pack_by_id(id)
   .then(({data})=>{
    console.log(data.data);
    setPack(data.data)
   })
   .catch((err)=>{
    console.log(err);
   })
  }



   const getStatus = async() => {
    await get_all_packs_status()
    .then(({data})=>{
     console.log(data.data);
     setStatus(data.data)
    })
    .catch((err)=>{
     console.log(err);
    })
   }


   const handelChange = async(e)=>{
    console.log(e.target.value);
     await change_pack_status(pack.id,e.target.value)
     .then(()=>{
      toast.success("modifier avec succés");
     })
     .catch((err)=>console.log(err))
   }


  useEffect(()=>{
    getPack()
    getStatus()
  },[])

  return (
    <>
      <PageTitle createBtn={false} title={'Colis'}>
        <li aria-current="page" className="breadcrumb-item active text-uppercase">Consultation</li>
      </PageTitle>
      <DefaultCard title={''}
        createBtn={false}>



          <div className="container">
             
                  <div className="card-body">
                      <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="white-box">

                               {pack.image && <ShowImage imageName={pack.image}  width={240} height={300}/>}
                               
                                 
                                 </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-12">
                               <div className='row justify-content-between'>
                                  <h3 className="card-title text-dark"><strong>{pack.name}</strong></h3>
                                
                                <div>
                                  {pack.statut  &&
                                  <select className="form-select form-control" defaultValue={pack.statut.id} onChange={handelChange} >
                                   {
                                    status.map((st)=>(
                                      <option value={st.id} key={st.id}
                                        // selected={st.id === pack.statut.id}
                                      >{st.name}</option>
                                    ))
                                   }
                                </select> 
                                  }
                                     
                                </div>

                              </div>
                              <hr/>

                              <p>{pack.designation}</p>

                            
                              <h3 className="box-title">Details</h3>
                              <hr/>
                              <ul className="list-unstyled mb-2">
                                  <li><i className="fas fa-cubes text-success mr-2"></i><strong className='text-dark'>Quantite:</strong> {pack.quantite}</li>
                                  <li><i className="fas fa-tag text-success mr-2"></i><strong className='text-dark'>Prix Unitaire:</strong> {pack.prixUnitaire} MAD</li>
                                  <li><i className="fas fa-tags text-success mr-2"></i><strong className='text-dark'>Prix Total:</strong> {pack.prixTotal} MAD</li>
                              </ul>

                               {pack.client &&
                              <div className="panel panel-default panel-order mt-3">
                                     <h3 className="box-title">Propriétaire</h3>
                                     <hr/>
                                      <div className="panel-body">
                                          <div className="row">
                                              <div className="col-md-3 text-center">
                                                <img src="https://bootdey.com/img/Content/user_3.jpg" className="media-object img-thumbnail"  width={80} height={80}/>
                                              </div>
                                              <div className="col-md-9">
                                                  <div className="row">
                                                      <div className="col-md-12">

                                                        <ul className="list-unstyled">
                                                              <li><i className="fas fa-user-circle text-success mr-2"></i><strong className='text-dark'>Nom et Prenom:</strong> {pack.client.firstname} {pack.client.lastname}</li>
                                                              <li><i className="fas fa-phone-square-alt text-success mr-2"></i><strong className='text-dark'>Email:</strong> {pack.client.email}</li>
                                                              <li><i className="far fa-envelope-open text-success mr-2"></i><strong className='text-dark'>Telephone:</strong> {pack.client.phone}</li>
                                                        </ul>

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          

                                         
                                      </div>
                              </div>
                              }


                          </div>
                          



                        <PackCommandes id={id}/>


                      </div>
                  </div>
          </div>



        </DefaultCard>
    </>
  )
}

PackConsultation.propTypes = {

}

export default PackConsultation
