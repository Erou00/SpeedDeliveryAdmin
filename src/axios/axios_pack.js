import ApiManager from "./ApiManager";

export const get_packs = async(name,clientId,catId,currentPage,packPerPage) => {
    try{
  
        const baseUrl = "/private/packs";
        let url = '';
        url = `${baseUrl}?name=${name}&clientId=${clientId}&catId=${catId}&page=${currentPage-1}&size=${packPerPage}`
        
        console.log(url);
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

 


  export const get_all_packs_select = async() => {
    try{
  
        const baseUrl = "/private/packs";
        let url = '';
        url = `${baseUrl}/all-packs-select`
        
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


  export const get_pack_by_id = async(id) => {
    try{
  
        const baseUrl = "/private/packs";
        let url = '';
        url = `${baseUrl}/${id}`
        
        console.log(url);
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



  // Status


  export const get_all_packs_status = async() => {
    try{
  
        const baseUrl = "/private/pack-status";
        let url = '';
        url = `${baseUrl}`
        
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

  // change-status

  export const change_pack_status = async(pId,sId) => {
    try{
  
        const baseUrl = "/private/packs/change-status";
        let url = '';
        url = `${baseUrl}?packId=${pId}&statutId=${sId}`
        
        const result = await ApiManager(url, {
          method: 'PUT',
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