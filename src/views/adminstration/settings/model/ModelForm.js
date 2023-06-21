import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { first_object_value } from '../../../../utils/functions';
import { useNavigate, useParams } from 'react-router-dom';
import { add_model, get_models_by_id, update_model } from '../../../../axios/axios_model';
import ErrorMsg from '../../../../components/error/ErrorMsg';
import { get_all_marks} from '../../../../axios/axios_mark';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(60, 'Too Long!')
      .required("merci d'entrer le nom de modele"),
     
    mark : Yup.number().required("merci de selectionner la marque")
    
  });

const ModelForm = () => {
    const navigate = useNavigate();
    const [model,setModel] = useState({
        id: null,
        name: '',
        mark:''
      }) 

     const [marks,setMarks] = useState([]) 
    
    let {id} = useParams();

    
    useEffect(()=>{
        if (id) {
        get_models_by_id(id).then(({data})=>{
            setModel(
                {   id : data.data.id,
                    name:data.data.name,
                    mark:data.data.mark.id
                });
        }).catch((err)=>{
                console.log(err);
            })
        }

        get_all_marks().then(res => {
           setMarks(res.data.data);
        }).catch((err)=>{
          console.log(err);
        })
          

    },[id])

  const handleSubmit = values => {
    if (!model.id) {

        add_model(values)
        .then(({data}) => {
            if(data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/parametrage/modeles');
            }else if (data.error === true) {
                toast.error(first_object_value(data.errors));
            }
        
        }).catch(err => {
        const response = err.response;
        console.log(err);
        if (response && response.status === 401) {
            console.log(err);
        }
        })
    }else{
        update_model(model.id,values).then(({data}) => {
            if(data.error === false){
                toast.success("modifier avec succés");
                navigate('/dashboard/parametrage/modeles');
            }else if (data.error === true) {
                toast.error(first_object_value(data.errors));
            }
        
            }).catch(err => {
            const response = err.response;
            console.log(err);
            if (response && response.status === 401) {
                console.log(err);
            }
            })
    }
}
  return (
    <div className="container-fluid">

        <PageTitle title={model.id ? `Modifier la marque: ${model.name}` : 'Ajouter Nouvelle Modele'} />
        <div className="card shadow mb-4 p-4">

        <Formik
           enableReinitialize initialStatus={model}
            initialValues={{
                name: model.name,
                mark :  model.mark
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={handleSubmit}
            >
        {({values,errors,touched,handleChange,handleBlur,handleSubmit})=>(
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="form-horizontal"onSubmit={handleSubmit}>
                                <div className="form-group">
                                <label className="control-label col-sm-2 text-dark"><strong>Modele:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="Modele" name="name"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.name}/>

                                     <ErrorMsg ErrorMsgText={errors.name && touched.name && errors.name}/>
                                </div>
                                </div>
                                <div className="form-group">
                                <label className="control-label col-sm-2 text-dark" ><strong>Marque</strong></label>
                                <div className="col-sm-10">          
                                  <select className="form-control form-select-lg mb-3" 
                                  aria-label=".form-select-lg example" as="select" name='mark'
                                  value={values.mark}
                                  onChange={handleChange}>
                                    <option>Selectionner une marque</option>
                                        {
                                          marks.map(m => (
                                            <option value={m.id} key={m.id}>{m.name}</option>
                                          ))
                                        }
          
                                  </select>
                                     <ErrorMsg ErrorMsgText={errors.mark && touched.mark && errors.mark}/>
                                </div>
                                </div>

                                <div className="form-group">        
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                        <i className='fas fa-save mr-2'></i>
                                        <strong>Enregistrer</strong> 
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
                
         )}
        </Formik>
        </div>
    </div>
  )
}

export default ModelForm