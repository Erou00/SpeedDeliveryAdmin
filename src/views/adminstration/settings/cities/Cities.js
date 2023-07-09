import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import { Link } from 'react-router-dom'
import Pagination from '../../../../utils/Pagination';
import DeleteModal from '../../../../components/modal/deleteModal/DeleteModal';
import { toast } from 'react-toastify';
import { get_cities,delete_city_by_id } from '../../../../axios/axios_city';
import DefaultCard from '../../../../components/cards/DefaultCard';

const Cities = ()=> {
  const [cities,setCities] = useState([]);
  const [search,setSearch] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [citiesPerPage] = useState(10);
  const [totalAmountOfCities,setTotalAmountOfCities] = useState(0)
  const [show,setShow] = useState(false)
  const [selectedcitie,setSelectedcitie] = useState(null)

  const fetchcities = () => {
    get_cities(searchValue,currentPage,citiesPerPage)
    .then(({data})=>{
        setCities(data.data.content);
        setTotalePages(data.data.totalPages)
        setTotalAmountOfCities(data.data.totalElements);      
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

   fetchcities();
     
  },[currentPage,citiesPerPage,searchValue])



    const indexOfLastcitie = currentPage * citiesPerPage;
    const indexOfFirstcitie = indexOfLastcitie - citiesPerPage;
    let lastItem = citiesPerPage * currentPage <= totalAmountOfCities ?
               citiesPerPage * currentPage : totalAmountOfCities

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const searchHandleChange = () => {
      if (search === '') {
          setSearchValue('')
      }else{
          setSearchValue(search)
      }
    }

    const deletecitie = (id) =>{
      console.log(id);
        delete_city_by_id(id).then(()=>{
          setShow(false)
          fetchcities()
          toast.success("supprimer avec succés");
        }).catch(err => {
          console.log(err);
        })
        

        
    }

    return (
    <div className="container-fluid">
       <DeleteModal show={show} setShow={setShow} item={selectedcitie}  deleteFunction={deletecitie}/>
       <PageTitle createBtn={true} title={'Villes'}></PageTitle>
            <DefaultCard title={`Nombre de résultats : (${totalAmountOfCities})`}
              createBtn={true}>
                         
                              <div className='col-6 p-0 mb-2'>
                                <div className='d-flex'>
                                    <input className='form-control'
                                    type="search" placeholder='Search'
                                    aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />

                                    <button className='btn btn-success ml-2 px-4' onClick={searchHandleChange}>
                                        Search
                                    </button>
                                </div>
                            </div>

                              <p className='mb-0'> {indexOfFirstcitie + 1} à {lastItem} sur
                                    {totalAmountOfCities} articles </p>
                                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                      <thead>
                                          <tr>
                                              <th></th>
                                              <th>Nom</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      
                                      
                                      {totalAmountOfCities > 0 ?
                                        <tbody>
                                        {
                                          cities.map((citie,index) => (
                                            <tr key={citie.id}>
                                                <td>{index + 1}</td>
                                                <td>{citie.name}</td>
                                                <td>
                                                  <button className='btn btn-sm btn-danger' onClick={()=>{
                                                    setShow(!show)
                                                    setSelectedcitie(citie)
                                                    }}>
                                                    <i className='fas fa-trash'></i>
                                                  </button>
                                                  <Link className='btn btn-sm btn-warning ml-3'
                                                     to={`${citie.id}`}>
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
                                              <td colSpan={3} className='mt-3'>
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


export default Cities