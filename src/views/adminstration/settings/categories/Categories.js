import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import { Link } from 'react-router-dom'
import { delete_categorie_by_id, get_categories } from '../../../../axios/axios_request';
import Pagination from '../../../../utils/Pagination';
import DeleteModal from '../../../../components/modal/deleteModal/DeleteModal';
import { toast } from 'react-toastify';
import DefaultCard from '../../../../components/cards/DefaultCard';

const Categories = ()=> {
  const [categories,setCategories] = useState([]);
  const [search,setSearch] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [categoriesPerPage] = useState(10);
  const [totalAmountOfCategories,setTotalAmountOfCategories] = useState(0)
  const [show,setShow] = useState(false)
  const [selectedCategorie,setSelectedCategorie] = useState(null)

  const fetchCategories = () => {
    get_categories(searchValue,currentPage,categoriesPerPage)
    .then(({data})=>{
        setCategories(data.data.content);
        setTotalePages(data.data.totalPages)
        setTotalAmountOfCategories(data.data.totalElements);      
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

   fetchCategories();
     
  },[currentPage,categoriesPerPage,searchValue])



    const indexOfLastCategorie = currentPage * categoriesPerPage;
    const indexOfFirstCategorie = indexOfLastCategorie - categoriesPerPage;
    let lastItem = categoriesPerPage * currentPage <= totalAmountOfCategories ?
               categoriesPerPage * currentPage : totalAmountOfCategories

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const searchHandleChange = () => {
      if (search === '') {
          setSearchValue('')
      }else{
          setSearchValue(search)
      }
    }

    const deleteCategorie = (id) =>{
        delete_categorie_by_id(id).then(()=>{
          setShow(false)
          fetchCategories()
          toast.success("supprimer avec succés");
        }).catch(err => {
          console.log(err);
        })
        

        
    }

    return (
    <div className="container-fluid">
       <DeleteModal show={show} setShow={setShow} item={selectedCategorie}  deleteFunction={deleteCategorie}/>
       <PageTitle createBtn={true} title={'Categories'}></PageTitle>
            <DefaultCard title={`Nombre de résultats : (${totalAmountOfCategories})`}
              createBtn={true}>
      
            

                    <div className='col-6 p-0'>
                      <div className='d-flex'>
                          <input className='form-control'
                          type="search" placeholder='Search'
                          aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />

                          <button className='btn btn-success ml-2  px-4' onClick={searchHandleChange}>Search</button>
                      </div>
                  </div>

                    <p className='mb-0'> {indexOfFirstCategorie + 1} à {lastItem} sur
                          {totalAmountOfCategories} articles </p>
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nom</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            
                            
                            {totalAmountOfCategories > 0 ?
                              <tbody>
                              {
                                categories.map((categorie,index) => (
                                  <tr key={categorie.id}>
                                      <td>{index + 1}</td>
                                      <td>{categorie.name}</td>
                                      <td>
                                        <button className='btn btn-sm btn-danger' onClick={()=>{
                                          setShow(!show)
                                          setSelectedCategorie(categorie)
                                          }}>
                                          <i className='fas fa-trash'></i>
                                        </button>
                                        <Link className='btn btn-sm btn-warning ml-3'
                                            to={`${categorie.id}`}>
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


export default Categories