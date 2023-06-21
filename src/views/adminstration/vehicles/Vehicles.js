import React, { useEffect, useState } from 'react'
import Vehicle from './component/Vehicle'
import { Link } from 'react-router-dom'
import PageTitle from '../../../components/pageTitle/PageTitle'
import { delete_vehicle_by_id, get_vehicles } from '../../../axios/axios_vehicle'
import { get_all_marks } from '../../../axios/axios_mark'
import { get_all_models } from '../../../axios/axios_model'
import { get_all_assurances } from '../../../axios/axios_assurance'
import Pagination from '../../../utils/Pagination'
import { toast } from 'react-toastify'
import DeleteModal from '../../../components/modal/deleteModal/DeleteModal'

const Vehicles = () => {

  const [vehicles,setVehicles] = useState([]);
  const [modelsNoFilter,setModelsNoFilter] = useState([]);

  const [marks,setMarks] = useState([]);
  const [models,setModels] = useState([]);
  const [assurances,setAssurances] = useState([]);

  const [mark,setMark] = useState('');
  const [model,setModel] = useState('');
  const [assurance,setAssurance] = useState('');
  const [dateStartvehicle,setDateStartvehicle] = useState('');
  const [dateEndvehicle,setDateEndvehicle] = useState('');


  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [vehiclesPerPage] = useState(10);
  const [totalAmountOfVehicles,setTotalAmountOfVehicles] = useState(0)
  const [show,setShow] = useState(false)
  const [selectedvehicle,setSelectedvehicle] = useState(null)



  const fetchGetVehicles = () =>{
    get_vehicles(mark,model,assurance,dateStartvehicle,dateEndvehicle,currentPage,vehiclesPerPage)
    .then(({data}) => {
      setVehicles(data.data.content);
      setTotalePages(data.data.totalPages)
      setTotalAmountOfVehicles(data.data.totalElements);      
    }).catch(err => {
      const response = err.response;
      console.log(err);
      if (response && response.status === 401) {
        console.log(err);
      }
    })
  }

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

  useEffect(()=> {
    fetchGetVehicles(mark,model,assurance,dateStartvehicle,dateEndvehicle);
  },[mark,model,assurance,dateStartvehicle,dateEndvehicle,currentPage,vehiclesPerPage])

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstvehicle = indexOfLastVehicle - vehiclesPerPage;
  let lastItem = vehiclesPerPage * currentPage <= totalAmountOfVehicles ?
   vehiclesPerPage * currentPage : totalAmountOfVehicles

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
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

 
  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const deleteVehicle = (id) =>{
      delete_vehicle_by_id(id).then(()=>{
        setShow(false)
        fetchGetVehicles()
        toast.success("supprimer avec succés");
      }).catch(err => {
        console.log(err);
      })
      

      
  }

  const handeDelete = () => {
      setShow(!show)
      console.log(selectedvehicle);
  }

  return (

    <>
    <PageTitle title={'Véhicules'}></PageTitle>
    <DeleteModal show={show} setShow={setShow} item={selectedvehicle}  deleteFunction={deleteVehicle}/>

    <div className="container-fluid">
      <div className="card shadow mb-4">
          <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold mt-1">
                    Nombre de résultats : ({totalAmountOfVehicles})</h6>
                    
                  <Link to='create' className='btn btn-secondary py-0'>
                    <i className="fas fa-plus-circle fa-sm text-white mr-2"></i> 
                    <strong>Ajouter</strong> 
                  </Link>
          </div>
          <div className="card-body">
            <div className='container'>
              <div className='row mb-3' id='vehicule-filter'>
                  <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                    <select className="form-select form-control" onChange={(e) => {
                                              handleSelectChange(e)
                                              setMark(e.target.value)}
                                              }>
                            <option value="">Marques</option>
                            {marks.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                    <select className="form-select form-control" onChange={(e) => {setModel(e.target.value)}} >
                        <option value="" >Modele</option>
                        {
                          models.map((model) => (
                            
                          <option value={model.id} key={model.id} >{model.name}</option>
                          ))
                        }
                    </select>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                      <select className="form-select form-control" onChange={(e) => setAssurance(e.target.value)} >
                                <option value="" >Assurance</option>
                                {
                                  assurances.map((assurance) => (
                                    <option value={assurance.id} key={assurance.id} >{assurance.name}</option>
                                  ))
                                }
                      </select>                  </div> 
                  <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                    <input className='form-control' type="date"  aria-labelledby='Search' onChange={e => {setDateStartvehicle(e.target.value)}} />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                    <input className='form-control' type="date"  aria-labelledby='Search' onChange={e => {setDateEndvehicle(e.target.value)}} />
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                    <button className='btn btn-primary  w-100'>Chercher</button>
                  </div>
              </div>
            </div>
            <div className="container-fluid">
            <p className='mb-2'> {indexOfFirstvehicle + 1} à {lastItem} sur
                                    {totalAmountOfVehicles} articles </p>
              <div className="shop-default shop-cards shop-tech">
                <div className="row">
               
                  {
                    vehicles.map((vehicle) => (
                      <Vehicle key={vehicle.id} vehicle={vehicle} setSelectedvehicle ={setSelectedvehicle} handeDelete={handeDelete} />
                    ))
                  }
                   
                </div>
              </div>
            </div>
          </div>


          

          { totalPages > 1 && 
                                  <Pagination currentPage={currentPage} 
                                        totalPages={totalPages}
                                        paginate={paginate} />    
                              } 
      </div>

      

    </div>
    
    
    
    
    
    </>
  )
}

export default Vehicles