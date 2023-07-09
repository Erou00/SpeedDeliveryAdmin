import React from 'react'

const CardList = () => {
  return (
    
    <div className="row">

        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               GAINS (MENSUELS)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">MAD 40,000</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            REVENUS (ANNUELS)</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">MAD 215,000</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-1">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            NOUVELLE COMMANDES
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                EN TRAIN DE LIVREE</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-truck fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardList
