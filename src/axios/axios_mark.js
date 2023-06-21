import ApiManager from "./ApiManager";

export const add_mark = async data => {
    try {
      const result = await ApiManager('/private/marks', {
        method: 'POST',
        //  withCredentials:true,
        headers: {
          'Content-Type': 'multipart/form-data',
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


  export const get_marks = async (searchUrl,currentPage,marksPerPage) => {
    try {

      const baseUrl = "/private/marks";
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

  export const get_all_marks = async () => {
    try {

      const url = "/private/marks/all-marks";

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


  export const get_mark_by_id = async (mark_id) => {
    try {
      const baseUrl = "/private/marks";
      let url = '';
      url = `${baseUrl}/${mark_id}`
      

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

  export const update_mark = async (mark_id,data) => {
    try {
      const baseUrl = "/private/marks";
      let url = '';
      url = `${baseUrl}/${mark_id}/update`
      

      const result = await ApiManager(url, {
        method: 'PUT',
        //  withCredentials:true,
        headers: {
          'Content-Type': 'multipart/form-data',
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


  export const delete_mark_by_id = async (mark_id) => {
    try {
      const baseUrl = "/private/marks";
      let url = '';
      url = `${baseUrl}/${mark_id}/delete`
      

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