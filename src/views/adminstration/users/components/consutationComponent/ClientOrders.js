import React, { useEffect, useState } from 'react'
import { get_commands_by_client_id } from '../../../../../axios/axios_commande'
import Pagination from '../../../../../utils/Pagination'
import OrderCard from '../../../../../components/orderCard/OrderCard'

const ClientOrders = ({id}) => {

    const [data,setData]=useState([])
    
  
    const [searchValue,setSearchValue] = useState('')
  
    const [totalPages,setTotalePages] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [itemPerPage] = useState(10);
    const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)
  

    const [selectedStatut, setSelectedStatut] = useState('');

    const handleOptionChange = (event) => {
      let statut = event.target.value
      setSelectedStatut(statut);
      
    };

    const handelReset = ()=>{
        setSelectedStatut('');
    }
    
    const fetchData = async () => {
      await get_commands_by_client_id(id,'','',selectedStatut,currentPage,itemPerPage)
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
    },[currentPage,selectedStatut])
  
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem= indexOfLastItem - itemPerPage;
    let lastItem = itemPerPage * currentPage <= totalAmountOfItems ?
                    itemPerPage * currentPage : totalAmountOfItems
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
    
  
          <div className='container-fluid mx-0 p-0 mt-4'>

        <div className='row mb-2'>
        <div className='col'>
            <div className="form-check form-check-inline">
            <input className="form-check-input" 
                type="radio" name="radioGroup" id="radio1"
                value={"1"} onChange={handleOptionChange}
                checked={selectedStatut === "1" }

                />
            <label className="form-check-label" htmlFor="radio1">Nouvelle</label>
            </div>
        </div>

        <div className='col'>
            <div className="form-check form-check-inline">
            <input className="form-check-input" 
                type="radio" name="radioGroup" id="radio2"
                value={"2"} onChange={handleOptionChange}

                checked={selectedStatut === "2" }

                />
            <label className="form-check-label" htmlFor="radio2">En cours</label>
            </div>
        </div>

        <div className='col'>
            <div className="form-check form-check-inline">
            <input className="form-check-input" 
                type="radio" name="radioGroup" id="radio3"
                value={"3"} onChange={handleOptionChange}
                checked={selectedStatut === "3" }

                />
            <label className="form-check-label" htmlFor="radio3">Livree</label>
            </div>
        </div>
           

        <div className='col'>
            <div className="form-check form-check-inline">
            <input className="form-check-input" 
                type="radio" name="radioGroup" id="radio4"
                value={"4"} onChange={handleOptionChange}
                checked={selectedStatut === "4" }

                />
              <label className="form-check-label" htmlFor="radio4">Retour</label>
            </div>
        </div>
            
                                
        </div>
        <div className='row mb-2'>
            <div className='col text-end'>
               <button className='btn btn-danger' onClick={handelReset}>Reset</button>
            </div>
        </div>

          <p className='mb-2'> {indexOfFirstItem + 1} à {lastItem} sur
                                      {totalAmountOfItems} articles </p>
            
            <div className='row mb-3'>
              {
                data.map(d => (
                  <OrderCard key={d.id} col={6} item={d}/>
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
                   
       
    )
  }
  

export default ClientOrders
