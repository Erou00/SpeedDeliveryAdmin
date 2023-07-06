import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'

import Pagination from '../../../utils/Pagination'
import { get_all_packs_select} from '../../../axios/axios_pack'
import OrderCard from '../../../components/orderCard/OrderCard'
import { get_select_clients } from '../../../axios/axios_client'
import { get_commandes } from '../../../axios/axios_commande'
import { useOrderContext } from '../../../context/OrderContext'




const Commandes = () => {

  const [data,setData]=useState([])
  const [Packs,setPacks]=useState([])
  const [PackId,setPackId]=useState('')
  const [address,setAddress] = useState('')
  const [clients,setClients] = useState([])
  const [clientId,setClientId] = useState('')

  const [searchValue,setSearchValue] = useState(true)

  const [totalPages,setTotalePages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [itemPerPage] = useState(6);
  const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)

  const {isLoad,setIsLoad} = useOrderContext()

  
  const fetchData = async () => {
    await get_commandes(address,clientId,PackId,currentPage,itemPerPage)
      .then(({data})=>{
        console.log(data.data);
        setData(data.data.content);
        setTotalePages(data.data.totalPages)
        setTotalAmountOfItems(data.data.totalElements);
        setIsLoad(false)
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
    
      fetchData()

    
  },[searchValue,currentPage,isLoad])

  useEffect(()=>{
    get_all_packs_select()
    .then(({data})=>{
      setPacks(data.data)
    })
    .catch(err => {console.log(err);})

    get_select_clients().then(({data})=>{
      setClients(data.data)
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
      <PageTitle createBtn={true} title={'Colis'}></PageTitle>
      <DefaultCard title={`Nombre de résultats : (${totalAmountOfItems})`}
        createBtn={false}>

        <div className='container'>
        <div className='row mb-3' id='vehicule-filter'>
              <div className='col-lg-3 col-md-6 col-sm-12  mb-2'>
                <input className='form-control' type="text"  placeholder='chercher par titre' onChange={e => {setAddress(e.target.value)}} />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12  mb-2'>
              <select className="form-select form-control" onChange={(e) => {setPackId(e.target.value)}} >
                                <option value="" >Packs</option>
                                {
                                  Packs.map((cat) => (
                                    <option value={cat.id} key={cat.id} >{cat.name}</option>
                                  ))
                                }
                      </select>    
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12  mb-2'>
              <select className="form-select form-control" onChange={(e) => {setClientId(e.target.value)}} >
                                <option value="" >Clients</option>
                                {
                                  clients.map((client) => (
                                    <option value={client.id} key={client.id} >{client.firstname +' '+client.lastname}</option>
                                  ))
                                }
                      </select>    
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12  mb-2'>
                <button className='btn btn-primary  w-100' onClick={handleSearch}>Chercher</button>
              </div>
          </div>
        </div>

        <div className='container'>
        <p className='mb-2'> {indexOfFirstItem + 1} à {lastItem} sur
                                    {totalAmountOfItems} articles </p>
          
          <div className='row mb-3'>
            {
              data.map(com => (
                <OrderCard key={com.id} col={4}  item={com} />
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

export default Commandes