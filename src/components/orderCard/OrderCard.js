import React from 'react'
import './orderCard.css'
import { Link } from 'react-router-dom'

const OrderCard = ({col,item}) => {


	const __getBorderStyle = statut => {
		if (statut == "NOUVELLE") {
			return 'border-new'
		}

		if (statut == "EN COURS") {
		  return 'border-info'
		}

		if (statut == "EN TRAIN DE LIVREE") {
			return 'border-info'
		}
	
		if (statut == "LIVREE") {
		  return 'border-success'
		}
	
		if (statut == "RETOUR") {
		  return 'border-danger'
		}
	  }

	const __statutBackground = statut => {
	if (statut == "NOUVELLE") {
		return 'bg-new'
	}

	if (statut == "EN COURS") {
		return 'bg-encours'
	}

	if (statut == "EN TRAIN DE LIVREE") {
		return 'bg-encours'
	}

	if (statut == "LIVREE") {
		return 'bg-livree'
	}

	if (statut == "RETOUR") {
		return 'bg-retour'
	}
	}
  return (

       <div className={`col-sm-12 col-md-${col}`}>
		 <div className={`card radius-10 border-start border-0 border-3 ${__getBorderStyle(item.statut.statut)}`}>
			<div className="card-body">
				<div className="align-items-center">
					<div className={`widgets-icons-2 text-white ml-auto mb-2 ${__statutBackground(item.statut.statut)}`}>
                       {item.statut.statut}
					</div>
					<div className=''>
					   <p className="mb-0 text-dark"><strong>COLIS: {item.pack.name}</strong></p>
						<p className="mb-0 text-secondary">Prix: {item.price} MAD</p>
						<h6 className="my-1 text-info">
							<i className="fas fa-map-marker-alt mr-2"></i>{item.address.substring(0,40)}...
						</h6>
						<p className="mb-0 font-13"><strong>Quantite:</strong> {item.quantite}</p>

						<Link to={`/dashboard/commandes/${item.id}/consultation`} type="button" className="btn  btn-sm btn-primary mt-2">
                            <i className="fa fa-eye me-1"></i></Link>
						<button className='btn btn-sm btn-danger mt-2 ml-2'><i className='fa fa-trash'></i></button>
					</div>
					
				</div>
			</div>
		 </div>
	   </div>
  )
}

export default OrderCard