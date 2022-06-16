import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });


  export default Axios;