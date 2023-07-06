import ApiManager from "./ApiManager";

export const get_commandes = async(address,clientId,packId,currentPage,livreursPerPage) => {
    try{
  
        const baseUrl = "/private/commandes";
        let url = '';
        url = `${baseUrl}?address=${address}&clientId=${clientId}&packId=${packId}&page=${currentPage-1}&size=${livreursPerPage}`
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



export const get_commande_by_pack_id = async(id) => {
  try{

      const baseUrl = "/private/commandes";
      let url = '';
      url = `${baseUrl}/commandes-by-packid/${id}`
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




export const get_commande_by_id = async(id) => {
  try{

      const baseUrl = "/private/commandes";
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

export const affect_commande = async(livid,comid) => {
  try{

      const baseUrl = "/private/commandes";
      let url = '';
      url = `${baseUrl}/affectation?livId=${livid}&comId=${comid}`
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


export const get_commands_by_client_id = async(clientId,address,pack_id,statut_id,currentPage,itemPerPage)=>{
  try {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const baseUrl = "/private/commandes";
    let url = '';
    url = `${baseUrl}/my-commands?clientId=${clientId}&address=${address}&packId=${pack_id}&statutId=${statut_id}&page=${currentPage-1}&size=${itemPerPage}`

    console.log(url);
    const result = await ApiManager(url, {
      method: 'GET',
      headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${token}`
        
      },
      });

    return result;
  
  }  
      catch (error) {
      return error.response.data;
  }
}


export const get_commands_by_livreur_id = async(id,address,pack_id,statut_id,currentPage,itemPerPage)=>{
  try {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const baseUrl = "/private/commandes";
    let url = '';
    url = `${baseUrl}/livreur-commands?id=${id}&address=${address}&packId=${pack_id}&statutId=${statut_id}&page=${currentPage-1}&size=${itemPerPage}`

    console.log(url);
    const result = await ApiManager(url, {
      method: 'GET',
      headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ${token}`
        
      },
      });

    return result;
  
  }  
      catch (error) {
      return error.response.data;
  }
}