import ApiManager from "./ApiManager";



export const get_image = async (imageName) => {
    try {

      const baseUrl = `/private/file-name/${imageName}`;
     
      const result = await ApiManager(baseUrl, {
        method: 'GET',
        //  withCredentials:true,
        responseType: 'blob',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        },
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };