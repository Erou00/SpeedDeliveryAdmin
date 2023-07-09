import React, { useEffect, useState } from 'react'
import Pagination from '../../../../../utils/Pagination'
import { get_packs } from '../../../../../axios/axios_pack'
import PackCard from '../../../../../components/packCard/PackCard'
import { get_all_categories } from '../../../../../axios/axios_request'
import { get_select_clients } from '../../../../../axios/axios_client'


const ClientPacks = ({id}) => {

  const [data,setData]=useState([])
  const [categories,setCategories]=useState([])
  const [catId,setCatId]=useState([])
  const [name,setName] = useState('')

  const [searchValue,setSearchValue] = useState(true)

  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [itemPerPage] = useState(10);
  const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)

  
  const fetchData = async () => {
    await get_packs(name,id,catId,currentPage,itemPerPage)
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
      }).finally(()=>{
        setSearchValue(false)
      })
  }

  const handleSearch = () => {
    setSearchValue(true)
  }

  useEffect(()=>{
    if (searchValue) {
      fetchData()
    }
    
  },[searchValue])

  useEffect(()=>{
    get_all_categories()
    .then(({data})=>{
      setCategories(data.data)
    })
    .catch(err => {console.log(err);})

  
  },[])

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem= indexOfLastItem - itemPerPage;
  let lastItem = itemPerPage * currentPage <= totalAmountOfItems ?
                  itemPerPage * currentPage : totalAmountOfItems

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
        <div className='container'>
        <div className='row mb-3' id='vehicule-filter'>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par titre' onChange={e => {setName(e.target.value)}} />
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
              <select className="form-select form-control" onChange={(e) => {setCatId(e.target.value)}} >
                                <option value="" >CATEGORIE</option>
                                {
                                  categories.map((cat) => (
                                    <option value={cat.id} key={cat.id} >{cat.name}</option>
                                  ))
                                }
                      </select>    
              </div>
             
              <div className='col-lg-4 col-md-6 col-sm-12  mb-2'>
                <button className='btn btn-primary  w-100' onClick={handleSearch}>Chercher</button>
              </div>
          </div>
        </div>

        <div className='container'>
        <p className='mb-2'> {indexOfFirstItem + 1} à {lastItem} sur
                                    {totalAmountOfItems} articles </p>
          
          <div className='row mb-3'>
            {
              data.map(pack => (
                 <PackCard key={pack.id} item={pack} col={4}/>
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
                 
      
    </>
  )
}

export default ClientPacks
