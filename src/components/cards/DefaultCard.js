import React from 'react'
import { Link } from 'react-router-dom'

const DefaultCard = (props) => {
  return (
    
    <div className="container-fluid">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold mt-1">
                    {props.title}</h6>

                    {props.createBtn && 
                    
                    <Link to='create' className='btn btn-secondary py-0'>
                        <i className="fas fa-plus-circle fa-sm text-white mr-2"></i> 
                        <strong>Ajouter</strong> 
                    </Link>
                    }

            </div>
            <div className="card-body">
             
                    {
                        props.children
                    }
               
            </div>
        </div>
    </div>
  )
}

export default DefaultCard