import React, { useEffect, useState } from 'react'
import PageTitle from '../../../../components/pageTitle/PageTitle'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { first_object_value } from '../../../../utils/functions';
import { useNavigate, useParams } from 'react-router-dom';
import { add_mark, get_mark_by_id, update_mark } from '../../../../axios/axios_mark';
import ErrorMsg from '../../../../components/error/ErrorMsg';
import ShowImage from '../../../../components/showImage/ShowImage';
import DefaultCard from '../../../../components/cards/DefaultCard';


const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(60, 'Too Long!')
      .required("merci d'entrer le nom de marque"),
     
    image: Yup.mixed().required('Image is required').test(
      'fileType',
      'Only image files are allowed',
      (value) => {
        if (!value) return false;
        return value && ['image/jpeg', 'image/png','image/jpg'].includes(value.type);
      }
    ),
  });

const MarkForm = () => {
    const navigate = useNavigate();
    const [mark,setMark] = useState({
        id: null,
        name: '',
        image:null
      }) 
    
    let {id} = useParams();

    
    useEffect(()=>{
        if (id) {
        get_mark_by_id(id).then(({data})=>{
            setMark(
                { id : data.data.id,
                    name:data.data.name,
                    image:data.data.logo
                });
        }).catch((err)=>{
                console.log(err);
            })
        }

    },[id])

  const handleSubmit = values => {
    if (!mark.id) {

        add_mark(values)
        .then(({data}) => {
            if(data.error === false){
                toast.success("ajouter avec succés");
                navigate('/dashboard/parametrage/marques');
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
        update_mark(mark.id,values).then(({data}) => {
            if(data.error === false){
                toast.success("modifier avec succés");
                navigate('/dashboard/parametrage/marques');
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

<PageTitle createBtn={false} title={'Marques'}>
    <li aria-current="page" className="breadcrumb-item active text-uppercase">{ (id)  ?  'Modifier' : 'Ajouter'}</li>
    </PageTitle>
    <DefaultCard title={ (id)  ?  'Modifier la marque '+mark.name   : `Ajouter nouvelle marque`}
      createBtn={false}>
        <Formik
           enableReinitialize initialStatus={mark}
            initialValues={{
                name: mark.name,
                image:mark.image
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={handleSubmit}
            >
        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isValid,setFieldValue})=>(
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="form-horizontal"onSubmit={handleSubmit}>
                                <div className="form-group">
                                <label className="control-label col-sm-2 text-dark"><strong>Marque:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  placeholder="marque" name="name"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.name}/>

                                     <ErrorMsg ErrorMsgText={errors.name && touched.name && errors.name}/>
                                </div>
                                </div>
                                <div className="form-group">
                                <label className="control-label col-sm-2 text-dark" ><strong>Logo:</strong></label>
                                <div className="col-sm-10">          
                                    <input type="file" name="image" className="form-control" 
                                     onChange={(event) => {
                                        setFieldValue('image', event.currentTarget.files[0]);
                                      }}/>
                                     <ErrorMsg ErrorMsgText={errors.image && touched.image && errors.image}/>
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
                        <div className="col-md-4">
                            { id &&
                              
                              <ShowImage height={200} width={200} imageName={mark.image}/>

                            }
                        </div>
                    </div>
                </div>
                
         )}
        </Formik>
        </DefaultCard>
    </div>
  )
}

export default MarkForm