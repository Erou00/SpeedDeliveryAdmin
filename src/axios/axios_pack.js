import ApiManager from "./ApiManager";

export const get_packs = async(currentPage,livreursPerPage) => {
    try{
  
        const baseUrl = "/private/packs";
        let url = '';
        url = `${baseUrl}?page=${currentPage-1}&size=${livreursPerPage}`
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