import ApiManager from "./ApiManager";

export const add_vehicle = async data => {
    try {
      const result = await ApiManager('/private/vehicles', {
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

  export const get_vehicles = async (mark_id,model_id,assurance_id,dateStartAssurance,dateEndAssurance,currentPage,vehiclesPerPage)=>{
    try{
        const baseUrl = "/private/vehicles";
        let url = '';
        url = `${baseUrl}?mark=${mark_id}&model=${model_id}&assurance=${assurance_id}&dateStartAssurance=${dateStartAssurance}&duration=&page=${currentPage - 1}&size=${vehiclesPerPage}`
        const result = await ApiManager(url, {
          method: 'GET',
          //  withCredentials:true,
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
          },
          // params:{
          //   mark:  null ,
          //   model:model_id,
          //   assurance:assurance_id,
          //   dateStartAssurance:dateStartAssurance,
          //   duration:3,
          // }
        });
        return result;
      } catch (error) {
        return error.response.data;
      }
  }

  export const get_vehicle_by_id = async(vehicle_id) => {
    try {
      const baseUrl = "/private/vehicles";
      let url = '';
      url = `${baseUrl}/${vehicle_id}`
      

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



  export const delete_vehicle_by_id = async (vehicle_id) => {
    try {
      const baseUrl = "/private/vehicles";
      let url = '';
      url = `${baseUrl}/${vehicle_id}/delete`
      

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

  export const update_vehicle = async(vehicle_id,data) => {

    try {
      const baseUrl = "/private/vehicles";
      let url = '';
      url = `${baseUrl}/${vehicle_id}/update`
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

  }