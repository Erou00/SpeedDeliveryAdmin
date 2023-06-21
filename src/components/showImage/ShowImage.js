import React, { useEffect, useState } from 'react'
import { get_image  } from '../../axios/axios_image';
const ShowImage = ({width,height,imageName,optionalImage,nClass}) => {

      const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      if (imageName !== null) {
        const fetchImage = async () => {
          try {
             await get_image(imageName).then((res)=>{
              const imageUrl = URL.createObjectURL(res.data);
              setImageUrl(imageUrl);
             })
          } catch (error) {
              console.error('Error fetching image:', error);
          }
          };

          fetchImage();
      }
        

       
    }, [imageName]);


  const defaultImage = imageUrl === '' ? optionalImage  : imageUrl;

  return (
    <>
        <img src={defaultImage} className={nClass} alt="Displayed Image" width={width} height={height} />
    </>
  )
}

export default ShowImage