import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { add_categorie, get_categorie_by_id, update_categorie } from '../../../../axios/axios_request';
import { toast } from 'react-toastify';
import { first_object_value } from '../../../../utils/functions';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultCard from '../../../../components/cards/DefaultCard';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(60, 'Too Long!')
      .required("merci d'entrer le nom de categorie"),
  });

const CategorieForm = () => {
    const navigate = useNavigate();
    const [categorie,setCategorie] = useState({
        id: null,
        name: '',
      })

    let {id} = useParams();

    
        useEffect(()=>{
            if (id) {
            get_categorie_by_id(id).then(({data})=>{
                setCategorie(
                    { id : data.data.id,
                      name:data.data.name
                    });
            }).catch((err)=>{
                 console.log(err);
              })
            }

        },[])
    
  const handleSubmit = values => {
    if (!categorie.id) {
        add_categorie(values)
        .then(({data}) => {
            if(data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/parametrage/categories');
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
        update_categorie(categorie.id,values).then(({data}) => {
            if(data.error === false){
                toast.success("modifier avec succés");
                navigate('/dashboard/parametrage/categories');
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

<PageTitle createBtn={false} title={'Categories'}>
    <li aria-current="page" className="breadcrumb-item active text-uppercase">{   (id)  ?  'Modifier' : 'Ajouter'}</li>
    </PageTitle>
    <DefaultCard title={ (id)  ?  'Modifier la categorie '+categorie.name   : `Ajouter nouvelle categorie`}
      createBtn={false}>
        <Formik
           enableReinitialize initialStatus={categorie}
            initialValues={{
                name: categorie.name
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={handleSubmit}
            >
        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isValid})=>(
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-auto align-middle">
                        <label forhtml="categoriename" className="col-form-label"><strong>Nom :</strong></label>
                    </div>
                    <div className="col-auto d-block">
                        <input type="text" className="form-control bg-light border-2 small" placeholder=""
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        aria-label="" aria-describedby="basic-addon2"/>

                        <div>
                            <p className='text-danger'>
                                <small>
                                    <strong>
                                        {errors.name && touched.name && errors.name}
                                    </strong>
                                </small>
                            </p>
                        </div>
                        
                        

                        <button className='btn btn-primary btn-sm' type='submit' disabled={!isValid}>
                            <i className='fas fa-save mr-2'></i>
                            <strong>Enregistrer</strong> 
                        </button>
                    </div>
                </div>
            </form>
         )}
        </Formik>
       </DefaultCard>
    </div>
  )
}

export default CategorieForm