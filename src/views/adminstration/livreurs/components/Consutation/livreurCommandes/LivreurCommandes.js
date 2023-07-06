import React, { useEffect, useState } from 'react'
import OrderCard from '../../../../../../components/orderCard/OrderCard'
import { get_commands_by_livreur_id } from '../../../../../../axios/axios_commande'
import Pagination from '../../../../../../utils/Pagination'

const LivreurCommandes = ({id}) => {
    const [data,setData]=useState([])

    const [address,setAddress] = useState('')
    const [searchValue,setSearchValue] = useState(true)
  
    const [totalPages,setTotalePages] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    const [itemPerPage] = useState(6);
    const [totalAmountOfItems,setTotalAmountOfItems] = useState(0)
  
    const [selectedStatut, setSelectedStatut] = useState('');

    const handleOptionChange = (event) => {
      let statut = event.target.value
      setSelectedStatut(statut);
      
    };

    const fetchData = async () => {
      await get_commands_by_livreur_id(id,address,'',selectedStatut,currentPage,itemPerPage)
        .then(({data})=>{
          console.log(data.data);
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
      
        fetchData()
  
      
    },[searchValue,currentPage])
  
    useEffect(()=>{
     
    },[])
  
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem= indexOfLastItem - itemPerPage;
    let lastItem = itemPerPage * currentPage <= totalAmountOfItems ?
                    itemPerPage * currentPage : totalAmountOfItems
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
      <>
       
  
          <div className='container' style={{ backgroundColor: '#f5f5f9'}}>
            
          <h4 className="text-light text-uppercase mt-2"> <strong>Commnades</strong></h4>
          <hr/>
          <div className='row mb-2 mt-4'>
                <div className='col-lg-12 col-md-12 col-sm-12  mb-2'>
                  <input className='form-control' type="text"  placeholder='chercher par adresse' onChange={e => {setAddress(e.target.value)}} />
                </div>
            </div>

            <div className='row mb-2'>
       

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
            
                <div className='col text-end'>
                  <button className='btn btn-primary  w-100' onClick={handleSearch}>Chercher</button>
                </div>
                                
           </div>
          </div>
  
          <div className='container' style={{ backgroundColor: '#f5f5f9'}}>
          <p className='my-2'> {indexOfFirstItem + 1} à {lastItem} sur
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
                   
       </>
    )
  }

export default LivreurCommandes