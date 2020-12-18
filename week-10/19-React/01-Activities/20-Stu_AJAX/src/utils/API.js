import axios from 'axios';
const URL = 'https://www.omdbapi.com/?t=';
const KEY = '&apikey=trilogy';
const API = {
  search: (query) => axios.get(URL + query + KEY)
};

export default API;