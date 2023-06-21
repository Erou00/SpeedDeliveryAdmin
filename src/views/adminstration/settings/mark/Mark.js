import React, { useEffect, useState } from 'react'
import Pagination from '../../../../utils/Pagination';
import { delete_mark_by_id, get_marks } from '../../../../axios/axios_mark';
import DeleteModal from '../../../../components/modal/deleteModal/DeleteModal';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../../../../components/pageTitle/PageTitle';
import ShowImage from '../../../../components/showImage/ShowImage';

const Mark = () => {
  const [marks,setMarks] = useState([]);
  const [search,setSearch] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [marksPerPage] = useState(10);
  const [totalAmountOfMarks,setTotalAmountOfMarks] = useState(0)
  const [show,setShow] = useState(false)
  const [selectedmark,setSelectedmark] = useState(null)

  const fetchmarks = () => {
    get_marks(searchValue,currentPage,marksPerPage)
    .then(({data})=>{
        setMarks(data.data.content);
        setTotalePages(data.data.totalPages)
        setTotalAmountOfMarks(data.data.totalElements);      
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

   fetchmarks();
     
  },[currentPage,marksPerPage,searchValue])



    const indexOfLastmark = currentPage * marksPerPage;
    const indexOfFirstmark = indexOfLastmark - marksPerPage;
    let lastItem = marksPerPage * currentPage <= totalAmountOfMarks ?
               marksPerPage * currentPage : totalAmountOfMarks

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const searchHandleChange = () => {
      if (search === '') {
          setSearchValue('')
      }else{
          setSearchValue(search)
      }
    }

    const deletemark = (id) =>{
        delete_mark_by_id(id).then((res)=>{
          console.log(res);
          if (res.status === 200) {
            setShow(false)
            fetchmarks()
            toast.success("supprimer avec succés");
          }else if (res.status === 500) {
            setShow(false)
            toast.error(res.message);
          }
         
        }).catch(err => {
          console.log(err);
        })
        

        
    }

    return (
    <div className="container-fluid">
      <DeleteModal show={show} setShow={setShow} item={selectedmark}  deleteFunction={deletemark}/>
      <PageTitle title={'Marques'}>
          <Link to="create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-plus-circle fa-sm text-white mr-2"></i> 
              <strong>Ajouter</strong> 
          </Link>
      </PageTitle>
      <div className="card shadow mb-4">
      <div className="card shadow mb-4">
                          <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">
                                 Nombre de résultats : ({totalAmountOfMarks})</h6>
                          </div>
                          <div className="card-body">
                              <div className="table-responsive">


                              <div className='col-6 p-0 mb-2'>
                                <div className='d-flex'>
                                    <input className='form-control'
                                    type="search" placeholder='Search'
                                    aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />

                                    <button className='btn btn-outline-success ml-2' onClick={searchHandleChange}>
                                        Search
                                    </button>
                                </div>
                            </div>

                              <p className='mb-0'> {indexOfFirstmark + 1} à {lastItem} sur
                                    {totalAmountOfMarks} articles </p>
                                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                      <thead>
                                          <tr>
                                              <th></th>
                                              <th>Logo</th>
                                              <th>Marque</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      
                                      
                                      {totalAmountOfMarks > 0 ?
                                        <tbody>
                                        {
                                          marks.map((mark,index) => (
                                            <tr key={mark.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                  <ShowImage imageName={mark.logo} height={50} width={100}/>
                                                </td>
                                                <td>{mark.name}</td>
                                                <td>
                                                  <button className='btn btn-sm btn-danger' onClick={()=>{
                                                    setShow(!show)
                                                    setSelectedmark(mark)
                                                    }}>
                                                    <i className='fas fa-trash'></i>
                                                  </button>
                                                  <Link className='btn btn-sm btn-warning ml-3'
                                                     to={`${mark.id}`}>
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
                                              <td colSpan={4} className='mt-3'>
                                                  Nous n'arrivons pas à trouver ce que vous cherchez !!
                                              </td>
                                            </tr>
                                        </tbody>
                                        }
                                      
                                  </table>
                                  
                              </div>
                             
   
                              { totalPages > 1 && 
                                  <Pagination currentPage={currentPage} 
                                        totalPages={totalPages}
                                        paginate={paginate} />    
                              } 

                           
                          </div>
              </div>
      </div>
</div>
  )
}


export default Mark