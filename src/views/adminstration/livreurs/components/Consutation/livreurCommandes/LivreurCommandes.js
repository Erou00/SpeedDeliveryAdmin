import React from 'react'
import OrderCard from '../../../../../../components/orderCard/OrderCard'

const LivreurCommandes = () => {
  return (
   
    <div className="container">

        <div className='row mb-4'>
            <div className='col'>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="radioGroup" id="radio1"/>
                <label className="form-check-label" htmlFor="radio1">En cours</label>
                </div>
            </div>

            <div className='col'>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioGroup" id="radio2"/>
                    <label className="form-check-label" htmlFor="radio2">Livrée</label>
                </div>
            </div>

            <div className='col'>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radioGroup" id="radio3"/>
                    <label className="form-check-label" htmlFor="radio3">Retour</label>
                </div>
            </div>

            
            



            
                                
        </div>

        <div className="row">
            <OrderCard col={6}/>
            <OrderCard col={6}/>
            <OrderCard col={6}/>
        </div>
    </div>
   
  )
}

export default LivreurCommandes