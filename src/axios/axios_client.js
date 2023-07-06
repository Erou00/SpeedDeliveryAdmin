import ApiManager from "./ApiManager";




  export const get_clients = async(firstname,lastname,currentPage,livreursPerPage) => {
    try{
  
        const baseUrl = "/private/clients";
        let url = '';
        url = `${baseUrl}?firstname=${firstname}&lastname=&page=${currentPage-1}&size=${livreursPerPage}`
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

  }

  export const get_select_clients = async() => {
    try{
  
        const baseUrl = "/private/clients";
        let url = '';
        url = `${baseUrl}/select-clients`
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

  }


  export const get_client_by_id = async(id) => {
    try{
  
        const baseUrl = "/private/clients";
        let url = '';
        url = `${baseUrl}/${id}`
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

  }

  export const get_client_details = async(id) => {
    try{
  
        const baseUrl = "/private/clients";
        let url = '';
        url = `${baseUrl}/details?id=${id}`
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

  }