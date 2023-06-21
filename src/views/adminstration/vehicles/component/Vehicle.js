import React, { useEffect } from 'react'
import './vehicle.css'
import ShowImage from '../../../../components/showImage/ShowImage'
import moment from 'moment';
import { Link } from 'react-router-dom';



const Vehicle = ({vehicle,handeDelete,setSelectedvehicle}) => {

    const condition = () => {

        const startDate = moment(new Date());
        const endDate = moment(vehicle.dateEndAssurance);
        const duration = moment.duration(endDate.diff(startDate));
        const differenceInDays = duration.asDays();
        if (differenceInDays > 0) {
            return true;
        }else{
            return false;
        }

       
        
    }; // Your condition here
    
    useEffect(()=> {

    },[])

  return (

        <div className="col-lg-4 col-md-6">
 
            <div className="box">
                  <div className="box-head">
                      <div className="info">
                          <h3 className="">

                          <strong>{vehicle.mark.name}</strong>  <br/>
                          {vehicle.model.name} <br/>


                          </h3>

                              <p className={condition() ? "badge badge-success" : "badge badge-danger"}>
                                 {condition() ? "En cours" : "Achevée"}
                              </p>

                          <p className="v-assurance"><strong>Assurance: {vehicle.assurance.name}</strong></p>

                          <p className="v-info"><i className="fa fa-calendar" aria-hidden="true"></i>Début: {vehicle.dateStartAssurance}</p>

                          <p className="v-info"><i className="fa fa-calendar" aria-hidden="true"></i>Fin: {vehicle.dateStartAssurance}</p>

                       
                      </div>
                     <div>

                      <div className="img-area">
                        <ShowImage imageName={vehicle.mark.logo}  width={250} height={140}/>
                      </div>
                      <h4 className="text-center"><strong>Caribirant : {vehicle.type}</strong></h4>

                      <h4 className="text-center"><strong>durée : {vehicle.duration} mois</strong></h4>
                  </div>
                   
                  </div>
            
                <div className="box-end">
                    <Link to={`${vehicle.id}`} className='btn box-button'>
                                <i className='fas fa-edit'> </i>
                    </Link>
                    <button  className='btn box-button-delete ml-2' onClick={()=> {
                        handeDelete()
                        setSelectedvehicle(vehicle)}}>
                        <i className='fas fa-trash'> </i>
                    </button>
                </div>
            </div>

              


              

        </div>
            
                   
               
  )
}

export default Vehicle