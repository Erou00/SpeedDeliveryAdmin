import ApiManager from "./ApiManager";


export const add_city = async data => {
    try {
      const result = await ApiManager('/private/cities', {
        method: 'POST',
        //  withCredentials:true,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        },
        data: data,
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };

  export const get_cities = async (searchUrl,currentPage,citiesPerPage) => {
    try {

      const baseUrl = "/private/cities";
      let url = '';
      url = `${baseUrl}?name=${searchUrl}&page=${currentPage - 1}&size=${citiesPerPage}`
      

      const result = await ApiManager(url, {
        method: 'GET',
        //  withCredentials:true,
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



  export const get_city_by_id = async (city_id) => {
    try {
      const baseUrl = "/private/cities";
      let url = '';
      url = `${baseUrl}/${city_id}`
      

      const result = await ApiManager(url, {
        method: 'GET',
        //  withCredentials:true,
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



  export const delete_city_by_id = async (city_id) => {
    try {
      const baseUrl = "/private/cities";
      let url = '';
      url = `${baseUrl}/${city_id}/delete`
      
      console.log(url);
      console.log(city_id);
      const result = await ApiManager(url, {
        method: 'DELETE',
        //  withCredentials:true,
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