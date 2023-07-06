import React, { useEffect, useState } from 'react'
import { get_livreur_affect } from '../../../../axios/axios_livreur';
import { toast } from 'react-toastify';
import { affect_commande } from '../../../../axios/axios_commande';
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";


const Affectation = ({com_id,com_liv}) => {
    const [livreurs,setLivreurs] = useState([]);
    const [livId,setLivrId] = useState(com_liv);

    const [address, setAddress] = useState('MASSIRA 2, Témara, Morocco');
    const [coordinates, setCoordinates] = useState(null);

    const getAddressLatLng = async (address) => {
      setAddress(address);
      const geocodedByAddress = await geocodeByAddress(address.label);
      const latLng = await getLatLng(geocodedByAddress[0]);
      setCoordinates(latLng);

    
    };


    const getLivreurs = async () => {
        await get_livreur_affect().then(({data})=>{
          setLivreurs(data.data)
        }).catch(err => {
          console.log(err);
        })
      }

      const handelChange = async (e) => {
        setLivrId(e.target.value)
       
      }
    
      const affectation = async() => {
         if (!livId) {
          toast.error('choisissez un livreur');
          return;
         }else{
           await affect_commande(livId,com_id).then(({data})=>{
            toast.success('affectation avec succes');
           }).catch(err => {
            console.log(err);
           })
          
         }
      }

      useEffect( ()=>{
        getLivreurs();
        
      },[])
  return (
    <div>
        <h4 className='text-primary'><strong>Validation:</strong></h4>
          <hr className="rounded"/>
               <div className="row">
                <div className="col-md-6">
                  <div className="form-group row" >


                  <label htmlFor="" className="col-md-12 col-form-label">
                  <strong>Livreurs : </strong></label>

                  <div className="col-md-6"> 
                  <select className="form-select form-control"
                  value={livId} onChange={handelChange}>
                  <option  value="" >Choisissez</option>
                   {
                    livreurs.map(l => ( 
                      <option key={l.id} value={l.id} >{l.firstname} {l.lastname}</option>
                    ))
                   }
                  </select> 
                  </div>
                  
                
              

                  </div>
                </div>



              </div>
              <div className="row">
                  <div className="col-md-6">
                      <button type="submit" className="btn btn-dark mb-2" onClick={affectation}>
                          {'Submit'}
                      </button>
                  </div>
              </div>    
                        
    </div>
  )
}

export default Affectation
