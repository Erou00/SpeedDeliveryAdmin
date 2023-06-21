import ApiManager from "./ApiManager";

export const user_login = async data => {
    try {
      const result = await ApiManager('/public/token', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization' : '455555'
        },
        data: data,
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };


  export const add_categorie = async data => {
    try {
      const result = await ApiManager('/private/categories/store', {
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


  export const get_categories = async (searchUrl,currentPage,categoriesPerPage) => {
    try {

      const baseUrl = "/private/categories";
      let url = '';
      url = `${baseUrl}?name=${searchUrl}&page=${currentPage - 1}&size=${categoriesPerPage}`
      

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


  export const get_categorie_by_id = async (categorie_id) => {
    try {
      const baseUrl = "/private/categories";
      let url = '';
      url = `${baseUrl}/${categorie_id}`
      

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

  export const update_categorie = async (categorie_id,data) => {
    try {
      const baseUrl = "/private/categories";
      let url = '';
      url = `${baseUrl}/${categorie_id}/update`
      

      const result = await ApiManager(url, {
        method: 'PUT',
        //  withCredentials:true,
        headers: {
          'content-type': 'application/json',
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


  export const delete_categorie_by_id = async (categorie_id) => {
    try {
      const baseUrl = "/private/categories";
      let url = '';
      url = `${baseUrl}/${categorie_id}/delete`
      

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