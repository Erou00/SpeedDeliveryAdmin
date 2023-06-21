import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard';
import { get_all_marks } from '../../../axios/axios_mark';
import { get_all_assurances } from '../../../axios/axios_assurance';
import { get_all_models } from '../../../axios/axios_model';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '../../../components/error/ErrorMsg';
import moment from 'moment/moment';
import { add_vehicle, get_vehicle_by_id, update_vehicle } from '../../../axios/axios_vehicle';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { first_object_value } from '../../../utils/functions';


const DisplayingErrorMessagesSchema = Yup.object().shape({
   
  mark : Yup.number().required("merci de selectionner la marque"),
  model : Yup.number().required("merci de selectionner le modele"),
  assurance : Yup.number().required("merci de selectionner l'assurance"),
  year : Yup.number().required("merci de selectionner l'année"),
  dateStartAssurance : Yup.date().required("merci de selectionner la date d'assurance").nullable(),
  duration : Yup.number().required("merci de selectionner le durée"),
  dateEndAssurance:  Yup.date().test('is-greater','La date de fin doit être supérieure à la date de début', function (value) {
                        const startDate = this.resolve(Yup.ref('dateStartAssurance'));
                        return moment(value).isAfter(startDate);
                      })
                    .required('End date is required'),
  type : Yup.string().required("merci de selectionner le type de carbirant"),
});
const VehicleForm = () => {

  const [marks,setMarks] = useState([]);
  const [modelsNoFilter,setModelsNoFilter] = useState([]);
  const [models,setModels] = useState([]);
  const [assurances,setAssurances] = useState([]);

  const navigate = useNavigate();

  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, index) => currentYear - index);

  const [vehicle,setVehicle] = useState({
    id:'',
    mark:'',
    model:'',
    assurance:'',
    year:'',
    dateStartAssurance:'',
    dateEndAssurance:'',
    duration:'',
    type:''

  })

  let {id} = useParams();

  const [selectedItem, setSelectedItem] = useState('');

  const filltredModel = (models) => {
    // Avoid filter for empty string
    if (!selectedItem) {
      return models;
    }
  
    const marque_id = parseInt(selectedItem);
    const filteredModels = models.filter(
      (model) => model.mark.id ===  marque_id
    );

    return filteredModels;
  };

  useEffect(() => {
    get_all_marks().then(({data})=>{ 
      setMarks(data.data) }).catch(err => {console.log(err);})
    get_all_models().then(({data})=>{ 
      setModelsNoFilter(data.data)
      setModels(data.data)
      }).catch(err => {console.log(err);})
    get_all_assurances().then(({data})=>{ setAssurances(data.data) }).catch(err => {console.log(err);})



  },[])

  useEffect(()=>{
    var filltredModels = filltredModel(modelsNoFilter);
    setModels(filltredModels);
  },
  // eslint-disable-next-line 
  [selectedItem]
  )

  useEffect(()=>{
    if (id) {
     get_vehicle_by_id(id)
     .then(({data})=>{
        console.log(data.data);
        setVehicle(data.data)
     }).catch((err)=>{
      console.log(err);
      })
    }
    
  },[id])
 
  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleSubmit = (values) => {
        const formattedStartDate = moment(values.dateStartAssurance).format('YYYY-MM-DD');
        const formattedEndDate = moment(values.dateEndAssurance).format('YYYY-MM-DD');
        values = {...values,dateStartAssurance:formattedStartDate,dateEndAssurance:formattedEndDate}

        if (!vehicle.id) {
           add_vehicle(values).then(({data}) => {
            if(data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/vehicules');
            }else if (data.error === true) {
                toast.error(first_object_value(data.errors));
            }
        
        }).catch(err => {
        const response = err.response;
        console.log(err);
        if (response && response.status === 401) {
            console.log(err);
        }
        })
        }else{
          console.log('ddd');
          console.log(values);
          update_vehicle(vehicle.id,values).then(({data}) => {
            if(data.error === false){
                toast.success("modifier avec succés");
                navigate('/dashboard/vehicules');
            }else if (data.error === true) {
                toast.error(first_object_value(data.errors));
            }
        
            }).catch(err => {
            const response = err.response;
            console.log(err);
            if (response && response.status === 401) {
                console.log(err);
            }
          })
        }
       
  }


  return (
    <>
      <PageTitle title={'Véhicules'}>
        <li aria-current="page" className="breadcrumb-item active text-uppercase">Ajouter</li>
      </PageTitle>


      <DefaultCard title={'Ajouter nouvelle Véhicule'}>
      <p>Selected item: {selectedItem}</p>
      <Formik
            enableReinitialize initialStatus={vehicle}
              initialValues={{
      
                mark:vehicle.mark.id,
                model:vehicle.model.id,
                assurance:vehicle.assurance.id,
                year:vehicle.year,
                dateStartAssurance:vehicle.dateStartAssurance,
                dateEndAssurance:vehicle.dateEndAssurance,
                duration:vehicle.duration,
                type:vehicle.type

              }}
              validationSchema={DisplayingErrorMessagesSchema}
              onSubmit={handleSubmit}
              >
          {({values,errors,touched,handleChange,handleBlur,handleSubmit})=>(
              <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                      <div className="mb-3 row">
                          <label htmlFor="marque" className="col-md-3 col-form-label text-right">Marque:</label>
                          <div className="col-md-9">
                            
                          <select className='form-control form-select' name='mark' value={values.mark} 
                              onChange={(e) => {
                                              handleSelectChange(e)
                                              handleChange(e)}
                                              }
                              onBlur={handleBlur}>
                            <option value="">Choisissez</option>
                            {marks.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                          <ErrorMsg ErrorMsgText={errors.mark && touched.mark && errors.mark}/>

                          </div>
                      </div>
                      <div className="mb-3 row">
                          <label htmlFor="marque" className="col-md-3 col-form-label text-right">Modele:</label>
                          <div className="col-md-9">
                            <select className="form-select form-control" name='model' value={values.model}
                             onChange={handleChange} onBlur={handleBlur}>
                                <option value="" >Choisissez</option>
                                {
                                  models.map((model) => (
                                    
                                  <option value={model.id} key={model.id} >{model.name}</option>
                                  ))
                                }
                            </select>
                            <ErrorMsg ErrorMsgText={errors.model && touched.model && errors.model}/>
                          </div>
                      </div>
                      <div className="mb-3 row">
                          <label htmlFor="marque" className="col-md-3 col-form-label text-right">Année</label>
                          <div className="col-md-9">
                            <select className="form-select form-control" name='year' value={values.year} 
                            onChange={handleChange} onBlur={handleBlur}>
                                <option value="" >Choisissez</option>
                                {
                                  years.map(y => (
                                    <option value={y} key={y}> {y}</option>
                                  ))
                                }
                                
                            </select>
                             <ErrorMsg ErrorMsgText={errors.year && touched.year && errors.year}/>
                          </div>
                      </div>
                      <div className="mb-3 row">
                          <label htmlFor="marque" className="col-md-3 col-form-label text-right">Durée:</label>
                          <div className="col-md-9">
                            <select className="form-select form-control" name='duration' value={values.duration} onBlur={handleBlur} onChange={handleChange}>
                                <option value="" >Choisissez</option>
                                <option value="3" >3 mois</option>
                                <option value="6" >6 mois</option>
                                <option value="12" >12 mois</option>
                            </select>
                             <ErrorMsg ErrorMsgText={errors.duration && touched.duration && errors.duration}/>
                          </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="mb-3 row">
                            <label htmlFor="marque" className="col-md-3 col-form-label text-right">Assurance:</label>
                            <div className="col-md-9">
                            <select className="form-select form-control" name='assurance' value={values.assurance} onChange={handleChange}
                                onBlur={handleBlur} >
                                <option value="" >Choisissez</option>
                                {
                                  assurances.map((assurance) => (
                                    <option value={assurance.id} key={assurance.id} >{assurance.name}</option>
                                  ))
                                }
                            </select>
                             <ErrorMsg ErrorMsgText={errors.assurance && touched.assurance && errors.assurance}/>
                            </div>
                      </div>
                      <div className="mb-3 row">
                            <label htmlFor="marque" className="col-md-3 col-form-label text-right">Carbirant:</label>
                            <div className="col-md-9">
                            <select className="form-select form-control" name='type'   value={values.type} onChange={handleChange}
                               onBlur={handleBlur} >
                                <option value="" >Choisissez</option>
                                <option value="Diesel" >Diesel</option>
                                <option value="Essence" >Essence</option>
                            </select>
                             <ErrorMsg ErrorMsgText={errors.type && touched.type && errors.type}/>
                            </div>
                      </div>
                      <div className="mb-3 row">
                            <label htmlFor="marque" className="col-md-3 col-form-label text-right">Début D'ASS:</label>
                            <div className="col-md-9">
                              <input className='form-control' type='date' name='dateStartAssurance'
                               value={values.dateStartAssurance} onBlur={handleBlur} 
                               onChange={(e) => {
                                handleChange(e);
                                values.dateEndAssurance = moment(e.target.value, 'YYYY-MM-DD').add(values.duration, 'months').format('YYYY-MM-DD');
                                

                                }} />
                               <ErrorMsg ErrorMsgText={errors.dateStartAssurance && touched.dateStartAssurance && errors.dateStartAssurance}/>
                            </div>
                      </div>
                      <div className="mb-3 row">
                            <label htmlFor="marque" className="col-md-3 col-form-label text-right">Fin D'ASS:</label>
                            <div className="col-md-9">
                              <input className='form-control' type='date' name='dateEndAssurance' 
                              value={values.dateEndAssurance} onChange={handleChange} readOnly/>
                              <ErrorMsg ErrorMsgText={errors.dateEndAssurance && touched.dateEndAssurance && errors.dateEndAssurance}/>

                            </div>
                      </div>

                      <div className='col-md-12 text-right'>
                        <button className="btn btn-primary" type="submit">
                            <i className='fas fa-save mr-2'></i>
                            <strong>Enregistrer</strong> 
                        </button>
                      </div>
                      
                    </div>

                  
                </div>
              </form>
          )}
        </Formik>
      </DefaultCard>  
            
    </>
  )
}

export default VehicleForm