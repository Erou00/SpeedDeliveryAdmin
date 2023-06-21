import ApiManager from "./ApiManager";


export const add_livreur = async data => {
    try {
      const result = await ApiManager('/private/livreurs', {
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


  export const get_livreurs = async(firstname,lastname,currentPage,livreursPerPage) => {
    try{
  
        const baseUrl = "/private/livreurs";
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


  export const get_livreur_by_id = async(id) => {
    try{
  
        const baseUrl = "/private/livreurs";
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