import React from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import ConsultationCard from './components/consutationComponent/ConsultationCard'

const UserConsultation = () => {
  return (
    <>
      <PageTitle createBtn={false} title={'Users'}>
        <li aria-current="page" className="breadcrumb-item active text-uppercase">Consultation</li>
      </PageTitle>
      <DefaultCard title={``}
        createBtn={false}>

         <ConsultationCard/>


      </DefaultCard>
    </>
    
  )
}

export default UserConsultation
