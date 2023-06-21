import React from 'react'
import PageTitle from '../../../components/pageTitle/PageTitle'
import DefaultCard from '../../../components/cards/DefaultCard'
import { Formik } from 'formik'
import * as Yup from 'yup';
import ErrorMsg from '../../../components/error/ErrorMsg';
import { add_livreur } from '../../../axios/axios_livreur';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { first_object_value } from '../../../utils/functions';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required("merci d'entrer username"),
    firstname: Yup.string()
        .min(4, 'Too Short!')
        .max(20, 'Too Long!')
        .required("merci d'entrer le nom'"),
    lastname: Yup.string()
        .min(4, 'Too Short!')
        .max(20, 'Too Long!')
        .required("merci d'entrer le prènom"),
    phone: Yup.number()
        .positive()
        .required("merci d'entrer le numero de telephone"),
    email: Yup.string()
        .email('email non valid')
        .required("merci d'entrer l'email"),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
  });

const LivreurForm = () => {

  const navigate = useNavigate();

  const handleSubmit = values => {
    add_livreur(values)
        .then((data) => {
            console.log(data);
            if(data.data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/livreurs');
            }
            if (data.error === true) {
                console.log(first_object_value(data.data));
                toast.error(first_object_value(data.data));
            }
        }).catch(err => {
        const response = err.response;
            if (response && response.status === 401) {
                console.log(err);
            }
        })
  }
  return (
    <>
    <PageTitle createBtn={false} title={'Livreurs'}>
    <li aria-current="page" className="breadcrumb-item active text-uppercase">Ajouter</li>
    </PageTitle>
    <DefaultCard title={`Ajouter nouveau livreur`}
      createBtn={false}>

      <Formik
      
        initialValues={{
            username: '',
            firstname: '',
            lastname: '',
            phone:'',
            email: '',
            password: '',
            confirmPassword: '',
        }}
      
        validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={handleSubmit}
      >

       {({values,errors,touched,handleChange,handleBlur,handleSubmit,isValid}) => (
          <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-lg-6'>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Username:</label>
                      <div className="col-md-9">
                          <input type='text' className='form-control' 
                            name='username'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}/>
                          <ErrorMsg ErrorMsgText={errors.username && touched.username && errors.username}/>

                      </div>
                  </div>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Nom:</label>
                      <div className="col-md-9">
                          <input type='text' className='form-control' 
                            name='firstname'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstname}/>
                          <ErrorMsg ErrorMsgText={errors.firstname && touched.firstname && errors.firstname}/>

                      </div>
                  </div>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Prènom:</label>
                      <div className="col-md-9">
                          <input type='text' className='form-control' 
                            name='lastname'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}/>
                          <ErrorMsg ErrorMsgText={errors.lastname && touched.lastname && errors.lastname}/>
                      </div>
                  </div>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Telephone:</label>
                      <div className="col-md-9">
                          <input type='number' className='form-control' 
                            name='phone'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}/>
                          <ErrorMsg ErrorMsgText={errors.phone && touched.phone && errors.phone}/>
                      </div>
                  </div>


                </div>

                <div className='col-lg-6'>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">E-mail:</label>
                      <div className="col-md-9">
                          <input type='email' className='form-control' 
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                            <ErrorMsg ErrorMsgText={errors.email && touched.email && errors.email}/>
                      </div>
                  </div>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Mot de passe:</label>
                      <div className="col-md-9">
                          <input type='password' className='form-control'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>

                            <ErrorMsg ErrorMsgText={errors.password && touched.password && errors.password}/>
                      </div>
                  </div>

                  <div className="mb-3 row">
                      <label className="col-md-3 col-form-label text-right">Confirmer:</label>
                      <div className="col-md-9">
                          <input type='password' className='form-control' 
                           name='confirmPassword'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.confirmPassword}/>
                           <ErrorMsg ErrorMsgText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}/>
                      </div>
                  </div>

                  <div className='col-md-12 text-right'>
                      <button className="btn btn-primary" type="submit">
                          <i className='fas fa-save mr-2'></i>
                          <strong>Enregistrer</strong> 
                      </button>
                  </div>


                </div>
            </div>
          </form>

       )}
      </Formik>

    </DefaultCard>
    </>
  )
}

export default LivreurForm