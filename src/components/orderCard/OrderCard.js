import React from 'react'
import './orderCard.css'

const OrderCard = ({col}) => {
  return (

       <div className={`col-sm-12 col-md-${col}`}>
		 <div className="card radius-10 border-start border-0 border-3 border-success">
			<div className="card-body">
				<div className="d-flex align-items-center">
					<div>
						<p className="mb-0 text-secondary">Total Orders</p>
						<h4 className="my-1 text-info">4805</h4>
						<p className="mb-0 font-13">+2.5% from last week</p>
					</div>
					<div className="widgets-icons-2 bg-gradient-scooter-success text-white ms-auto">
                        Livrée
					</div>
				</div>
			</div>
		 </div>
	   </div>
  )
}

export default OrderCard