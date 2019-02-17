import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://styles-conf-react.firebaseio.com'
});

export default instance;
