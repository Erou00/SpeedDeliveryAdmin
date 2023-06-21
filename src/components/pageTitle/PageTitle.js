import React from 'react'

function PageTitle(props) {
  return (
    <div className='container'>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb breadcrumb-caret">
        <li className="breadcrumb-item"><a href="#/" className="text-uppercase">Dashboard</a></li>
        <li className="breadcrumb-item"><a href="#/" className="text-uppercase">Menu</a></li>
        {( props.createBtn) ?
           <li aria-current="page" className="breadcrumb-item active text-uppercase">{props.title}</li>
          :
          <li className="breadcrumb-item"><a href="#/" className="text-uppercase">{props.title}</a></li>
        }
        {
           props.children
        }
      </ol>
      </nav>
    </div>
  )
}

export default PageTitle