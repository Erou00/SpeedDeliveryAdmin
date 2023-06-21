import ApiManager from "./ApiManager";

export const add_model = async data => {
    try {
      const result = await ApiManager('/private/models', {
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



  export const get_models = async (searchUrl,currentPage,marksPerPage) => {
    try {

      const baseUrl = "/private/models";
      let url = '';
      url = `${baseUrl}?name=${searchUrl}&page=${currentPage - 1}&size=${marksPerPage}`
      

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


  export const get_models_by_id = async (model_id) => {
    try {
      const baseUrl = "/private/models";
      let url = '';
      url = `${baseUrl}/${model_id}`
      

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

  export const get_all_models = async () => {
    try {
      const url = "/private/models/all-models";
      const result = await ApiManager(url, {
        method: 'GET',
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


  export const update_model = async (model_id,data) => {
    try {
      const baseUrl = "/private/models";
      let url = '';
      url = `${baseUrl}/${model_id}/update`
      const result = await ApiManager(url, {
        method: 'PUT',
        //  withCredentials:true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        },
        data:data
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };

  export const delete_model_by_id = async (model_id) => {
    try {
      const baseUrl = "/private/models";
      let url = '';
      url = `${baseUrl}/${model_id}/delete`
      

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