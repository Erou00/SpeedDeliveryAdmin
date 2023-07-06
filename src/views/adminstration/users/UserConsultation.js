import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import ConsultationCard from './components/consutationComponent/ConsultationCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { get_client_by_id, get_client_details } from '../../../axios/axios_client'

const UserConsultation = () => {

  let {id} = useParams();
   
  const [item,setItem] = useState({})
  const [details,setDetails] = useState({})
  const getClient = async() => {
      await get_client_by_id(id).then(({data})=>{
          console.log(data);
          setItem(data.data)
      }).catch((err)=>{
          console.log(err);
      })
  }

  const getClientDetails = async () => {
   await get_client_details(id)
        .then(({data})=>{
          setDetails(data.data)
      }).catch((err)=>{
          console.log(err);
})
  }

  useEffect(()=>{
     getClient()
     getClientDetails()
  },[])

  return (
    <>
      <PageTitle createBtn={false} title={'Users'}>
        <li aria-current="page" className="breadcrumb-item active text-uppercase">Consultation</li>
      </PageTitle>
      <DefaultCard title={``}
        createBtn={false}>

          
         <ConsultationCard item={item} details={details}/>


      </DefaultCard>
    </>
    
  )
}

export default UserConsultation
