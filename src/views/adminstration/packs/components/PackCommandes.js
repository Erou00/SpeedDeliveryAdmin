import React, { useEffect, useState } from 'react'
import { get_commande_by_pack_id } from '../../../../axios/axios_commande'
import { Link } from 'react-router-dom'
import DeleteModal from '../../../../components/modal/deleteModal/DeleteModal'

const PackCommandes = ({id}) => {

  const [show,setShow] = useState(false)
  const [commandes,setCommandes] = useState([])

  const getCommandes = async() => {
    await get_commande_by_pack_id(id)
    .then(({data})=>{
     console.log(data.data);
     setCommandes(data.data)
    })
    .catch((err)=>{
     console.log(err);
    })
   }

   useEffect(()=>{
    getCommandes()
  },[])


  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
    <DeleteModal show={show} setShow={setShow}  deleteFunction={()=>{}}/>

                              <h3 className="box-title mt-5">Commandes({commandes.length}):</h3>
                              <hr/>
                             

                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <tbody><tr>
                                   
                                    <th>Adresse</th>
                                    <th>Telephone</th>
                                    <th>Date</th>
                                    <th>Etat</th>
                                    <th>Action</th>
                                  </tr>
                                 
                                    
                                  {commandes.map((c)=>(
                                     <tr key={c.id}>
                                          <td width="300">{c.address}</td>
                                          <td className="align-middle">
                                            {c.phone}
                                          </td>
                                          <td>{c.creationDate}</td>
                                          <td>{c.statut.statut}</td>
                                          <td>
                                            <Link to={`/dashboard/commandes/${c.id}/consultation`} className="btn btn-primary btn-action mr-1"  data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-eye"></i></Link>
                                            <button className="btn btn-danger btn-action" data-toggle="tooltip"
                                            
                                            onClick={()=>{
                                              setShow(!show)
                                              
                                              }}
                                            ><i className="fas fa-trash"></i></button>
                                          </td>
                                        </tr>

                                        ))}
                                    
                                   

                                  

                                  
                                  </tbody>
                                  </table>

                              </div>



                          </div>
  )
}

export default PackCommandes
