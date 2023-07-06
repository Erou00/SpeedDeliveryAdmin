import React from 'react'
import './packCard.css'
import ShowImage from '../showImage/ShowImage'
import { Link } from 'react-router-dom'
const PackCard = ({item,col}) => {

  const __getCompletedIcon = statut => {
    if (statut === "EN_COURS"  ) {
      return  <a className="card-action" href="/#"><i className="fas fa-history"></i></a>
    } else if (statut === "EN_STOCK" ) {
      return <a className="card-action" href="/#"><i className="fas fa-warehouse"></i></a>
    } else if (statut === "INDISPONIBLE" ) {
      return <a className="card-action" href="/#"><i className="fas fa-times-circle"></i></a>
    }

  }

  return (
    <div className={`col-md-${col} mb-5`}>
                <div className="card-sl">
                    <div className="card-image">
                        <ShowImage imageName={item.image} />
                    </div>
                     
                    {__getCompletedIcon(item.statut.name)}
                    <div className='content'>
                    <div className="card-heading">
                       {item.name}
                    </div>
                    <div className="card-text">
                         {item.designation.substring(0,100)}
                    </div>
                    <div className="card-text">
                        <p>
                            <strong>Prix Total:</strong> {item.prixTotal} MAD<br/>
                            <strong>Le Reste En Stock:</strong> {item.quantite}<br/>
                        </p> 
                    </div>

                    </div>
                    < div className='card-button'>
                    <Link to={`${item.id}/consultation`} className="btn btn-sm btn-primary mr-2"> <i className='fa fa-eye'></i></Link>
                     <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                    </div>
                    

                </div>
    </div>
  )
}

export default PackCard
