import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'

import Pagination from '../../../utils/Pagination'
import { get_packs } from '../../../axios/axios_pack'
import PackCard from '../../../components/packCard/PackCard'

const Packs = () => {

  const [data,setData]=useState([])
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')

  const [searchValue,setSearchValue] = useState('')

  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [itemPerPage] = useState(10);
  const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)

  
  const fetchData = async () => {
    await get_packs(currentPage,itemPerPage)
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
      <PageTitle createBtn={true} title={'Colis'}></PageTitle>
      <DefaultCard title={`Nombre de résultats : (${totalAmountOfItems})`}
        createBtn={false}>

        <div className='container'>
        <div className='row mb-3' id='vehicule-filter'>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par nom' onChange={e => {}} />
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par prenom' onChange={e => {}} />
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <button className='btn btn-primary  w-100'>Chercher</button>
              </div>
          </div>
        </div>

        <div className='container'>
        <p className='mb-2'> {indexOfFirstItem + 1} à {lastItem} sur
                                    {totalAmountOfItems} articles </p>
          
          <div className='row mb-3'>
            {/* {
              data.map(client => (
                <ClientCard key={client.id} item={client} />
              ))
            }
               */}

               <PackCard/>
            
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

export default Packs