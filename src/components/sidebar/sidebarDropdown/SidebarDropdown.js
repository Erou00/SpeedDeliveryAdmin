import React from 'react'
import { Link } from 'react-router-dom'

function SidebarDropdown() {
  return (
    <li className="nav-item">
        <a className="nav-link collapsed" href="#/" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Parametrage</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Composants personnalisés:</h6>
                <Link className="collapse-item" to="parametrage/categories"><strong>Categories</strong></Link>
                <Link className="collapse-item" to="parametrage/villes"><strong>Villes</strong></Link>
                <Link className="collapse-item" to="parametrage/assurances"><strong>Assurances</strong></Link>
                <Link className="collapse-item" to="parametrage/marques"><strong>Marques</strong></Link>
                <Link className="collapse-item" to="parametrage/modeles"><strong>Modeles</strong></Link>
            </div>
        </div>
    </li>
  )
}

export default SidebarDropdown