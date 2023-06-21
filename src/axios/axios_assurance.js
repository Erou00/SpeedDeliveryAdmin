import ApiManager from "./ApiManager";

export const add_assurance = async data => {
    try {
      const result = await ApiManager('/private/assurances', {
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


  export const get_assurances = async (searchUrl,currentPage,assurancesPerPage) => {
    try {

      const baseUrl = "/private/assurances";
      let url = '';
      url = `${baseUrl}?name=${searchUrl}&page=${currentPage - 1}&size=${assurancesPerPage}`
      

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


  export const get_all_assurances = async () => {
    try {
      const url = "/private/assurances/all-assurances";
  
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


  export const get_assurance_by_id = async (assurance_id) => {
    try {
      const baseUrl = "/private/assurances";
      let url = '';
      url = `${baseUrl}/${assurance_id}`
      

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

  export const update_assurance = async (assurance_id,data) => {
    try {
      const baseUrl = "/private/assurances";
      let url = '';
      url = `${baseUrl}/${assurance_id}/update`
      

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


  export const delete_assurance_by_id = async (assurance_id) => {
    try {
      const baseUrl = "/private/assurances";
      let url = '';
      url = `${baseUrl}/${assurance_id}/delete`
      

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