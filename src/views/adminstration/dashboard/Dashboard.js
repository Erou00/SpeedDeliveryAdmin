import React from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import CardList from './components/cardList/CardList'
import ChartContainer from './components/chartsContainer'

function Dashboard() {
  return (
    <div className="container-fluid">
      <PageTitle createBtn={true} title={'Dashboard'}></PageTitle>
      <DefaultCard title={``}
        createBtn={false}>

        <CardList/>

        <ChartContainer/>

      </DefaultCard>
    </div>
  )
}

export default Dashboard