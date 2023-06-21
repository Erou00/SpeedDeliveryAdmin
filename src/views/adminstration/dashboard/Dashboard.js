import React from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'

function Dashboard() {
  return (
    <div className="container-fluid">
          <PageTitle title={'Dashboard'}>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </PageTitle>
    </div>
  )
}

export default Dashboard