import React, { useEffect, useState } from 'react'
import Pagination from '../../../../utils/Pagination';
import PageTitle from '../../../../components/pageTitle/PageTitle';
import { Link } from 'react-router-dom';
import { delete_model_by_id, get_models } from '../../../../axios/axios_model';
import ShowImage from '../../../../components/showImage/ShowImage';
import DeleteModal from '../../../../components/modal/deleteModal/DeleteModal';
import { toast } from 'react-toastify';
import DefaultCard from '../../../../components/cards/DefaultCard';

const Model = () => {

    const [models,setModels] = useState([]);
    const [search,setSearch] = useState('')
    const [searchValue,setSearchValue] = useState('')
    const [totalPages,setTotalePages] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [modelsPerPage] = useState(10);
    const [totalAmountOfModels,setTotalAmountOfModels] = useState(0)
    const [show,setShow] = useState(false)
    const [selectedModel,setSelectedModel] = useState(null)


    const fetchModels = () => {
      get_models(searchValue,currentPage,modelsPerPage)
      .then(({data})=>{
          console.log(data.data.content);
          setModels(data.data.content);
          setTotalePages(data.data.totalPages)
          setTotalAmountOfModels(data.data.totalElements);      
      })
      .catch(err => {
        const response = err.response;
        console.log(err);
        if (response && response.status === 401) {
          console.log(err);
        }
      })
   }

    useEffect(()=>{

      fetchModels();
        
     },[currentPage,modelsPerPage,searchValue])
   

    const indexOfLastModel = currentPage * modelsPerPage;
    const indexOfFirstModel = indexOfLastModel - modelsPerPage;
    let lastItem = modelsPerPage * currentPage <= totalAmountOfModels ?
    modelsPerPage * currentPage : totalAmountOfModels

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const deletemodel = (id) =>{
      delete_model_by_id(id).then(()=>{
        setShow(false)
        fetchModels()
        toast.success("supprimer avec succés");
      }).catch(err => {
        console.log(err);
      })
    }
  return (
    <div className="container-fluid">
        <DeleteModal show={show} setShow={setShow} item={selectedModel}  deleteFunction={deletemodel}/>
        <PageTitle createBtn={true} title={'Modeles'}></PageTitle>
            <DefaultCard title={`Nombre de résultats : (${totalAmountOfModels})`}
              createBtn={true}>

                              <div className='col-6 p-0 mb-2'>
                                <div className='d-flex'>
                                    <input className='form-control'
                                    type="search" placeholder='Search'
                                    aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />

                                    <button className='btn btn-success ml-2 px-4' 
                                    // onClick={searchHandleChange}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>

                              <p className='mb-0'> {indexOfFirstModel + 1} à {lastItem} sur
                                    {totalAmountOfModels} articles </p>
                                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                      <thead>
                                          <tr>
                                              <th></th>
                                              <th>Logo</th>
                                              <th>Marque</th>
                                              <th>Model</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      
                                      
                                      {totalAmountOfModels > 0 ?
                                        <tbody>
                                        {
                                          models.map((model,index) => (
                                            <tr key={model.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                  <ShowImage height={50} width={80} imageName={model.mark.logo}/>
                                                </td>
                                                <td>{model.mark.name}</td>
                                                <td>{model.name}</td>
                                                <td>
                                                  <button className='btn btn-sm btn-danger' onClick={()=>{
                                                    setShow(!show)
                                                    setSelectedModel(model)
                                                    }}>
                                                    <i className='fas fa-trash'></i>
                                                  </button>
                                                  <Link className='btn btn-sm btn-warning ml-3'
                                                     to={`${model.id}`}>
                                                      <i className='fas fa-edit'></i>
                                                  </Link>
                                                </td>
                                            </tr>
                                          ))
                                        }
                                         </tbody> 
                                       :
                                       
                                        <tbody className='m-5'>
                                         
                                            <tr>
                                              <td colSpan={5} className='mt-3'>
                                                  Nous n'arrivons pas à trouver ce que vous cherchez !!
                                              </td>
                                            </tr>
                                        </tbody>
                                        }
                                      
                                  </table>
                                  
                            
                             
                            <div className='row justify-content-centre mb-3'>
                              { totalPages > 1 && 
                                  <Pagination currentPage={currentPage} 
                                        totalPages={totalPages}
                                        paginate={paginate} />    
                              } 
                            </div>
                           
       </DefaultCard>              
    </div>
  )
}

export default Model