import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'

import Pagination from '../../../utils/Pagination'
import { get_clients } from '../../../axios/axios_client'
import ClientCard from './components/ClientCard'

const Users = () => {

  const [data,setData]=useState([])
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')

  const [searchValue,setSearchValue] = useState('')

  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [itemPerPage] = useState(10);
  const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)

  
  const fetchData = async () => {
    await get_clients(firstname,lastname,currentPage,itemPerPage)
      .then(({data})=>{
        console.log(data);
        setData(data.data.content);
        setTotalePages(data.data.totalPages)
        setTotalAmountOfItems(data.data.totalElements);
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
    fetchData()
  },[])

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem= indexOfLastItem - itemPerPage;
  let lastItem = itemPerPage * currentPage <= totalAmountOfItems ?
                  itemPerPage * currentPage : totalAmountOfItems

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <PageTitle createBtn={true} title={'Livreurs'}></PageTitle>
      <DefaultCard title={`Nombre de résultats : (${totalAmountOfItems})`}
        createBtn={false}>

        <div className='container'>
        <div className='row mb-3' id='vehicule-filter'>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par nom' onChange={e => {setFirstname(e.target.value)}} />
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par prenom' onChange={e => {setLastname(e.target.value)}} />
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <button className='btn btn-primary  w-100' onClick={fetchData}>Chercher</button>
              </div>
          </div>
        </div>

        <div className='container'>
        <p className='mb-2'> {indexOfFirstItem + 1} à {lastItem} sur
                                    {totalAmountOfItems} articles </p>
          
          <div className='row mb-3'>
            {
              data.map(client => (
                <ClientCard key={client.id} item={client} />
              ))
            }
              
            
          </div>


          <div className='row justify-content-centre mb-3'>

            { totalPages > 1 && 
                <Pagination currentPage={currentPage} 
                      totalPages={totalPages}
                      paginate={paginate} />    
            } 

          </div>
          

        </div>
                 
      </DefaultCard>
    </>
  )
}

export default Users