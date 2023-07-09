import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { first_object_value } from '../../../../utils/functions';
import { useNavigate, useParams } from 'react-router-dom';
import { add_city, get_city_by_id } from '../../../../axios/axios_city';
import DefaultCard from '../../../../components/cards/DefaultCard';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(60, 'Too Long!')
      .required("merci d'entrer le nom de Ville"),
  });

const CityForm = () => {
    const navigate = useNavigate();
    const [city,setCity] = useState({
        id: null,
        name: '',
      })

    let {id} = useParams();

    
    useEffect(()=>{
        if (id) {
        get_city_by_id(id).then(({data})=>{
            setCity(
                { id : data.data.id,
                    name:data.data.name
                });
        }).catch((err)=>{
                console.log(err);
            })
        }

    },[id])
    
  const handleSubmit = values => {
    console.log(city.id);
    if (!city.id) {
        add_city(values)
        .then(({data}) => {
            if(data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/parametrage/villes');
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
        // update_city(city.id,values).then(({data}) => {
        //     if(data.error === false){
        //         toast.success("modifier avec succés");
        //         navigate('/dashboard/parametrage/Citys');
        //     }else if (data.error === true) {
        //         toast.error(first_object_value(data.errors));
        //     }
        
        //     }).catch(err => {
        //     const response = err.response;
        //     console.log(err);
        //     if (response && response.status === 401) {
        //         console.log(err);
        //     }
        //     })
    }
}
  return (
    <div className="container-fluid">

    <PageTitle createBtn={false} title={'Villes'}>
      <li aria-current="page" className="breadcrumb-item active text-uppercase">{   (id)  ?  'Modifier' : 'Ajouter'}</li>
    </PageTitle>
    <DefaultCard title={ (id)  ?  'Modifier la ville '+city.name   : `Ajouter nouvelle ville`}
    createBtn={false}>
        <Formik
           enableReinitialize initialStatus={city}
            initialValues={{
                name: city.name
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={handleSubmit}
            >
        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isValid})=>(
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-auto align-middle">
                        <label forhtml="Cityname" className="col-form-label"><strong>Nom :</strong></label>
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

export default CityForm