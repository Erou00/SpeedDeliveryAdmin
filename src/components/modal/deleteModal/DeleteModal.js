import React from "react";
import { Modal } from "react-bootstrap";
import './deleteModel.css'

const DeleteModal= ({item,show,setShow,deleteFunction}) => {
  // const [show, setShow] = useState(true);

  return (
    
    <>
      <Modal show={show} className="modal fade">
        <Modal.Header className="modal-header flex-column">
          <div className="icon-box" style={{margin:"0 auto",
                                            borderRadius: "50%",
                                            zIndex: 9,
                                            textAlign: "center",}}>
            <i className="far fa-times-circle" style={{
                  color: "#f15e5e",
                  fontSize:"92px",
                  display: "inline-block",
                  marginTop: "13px,"
            }}></i>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-body text-center">
            <p>Voulez-vous vraiment supprimer  <strong>{item ? item.name : ''}</strong>? Ce processus ne peut pas être annulé.</p>
        </Modal.Body>
        <Modal.Footer className="modal-footer justify-content-end">
        
        <button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>Annuler</button>
				<button type="button" className="btn btn-danger" onClick={()=>{deleteFunction(item?.id)}} >Supprimer</button>
			
        
        </Modal.Footer> 
        
      </Modal>
    
    </>
  )
}



export default DeleteModal