import axios from 'axios';

const URL = "https://api.giphy.com/v1/gifs/search?q=";
const KEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const API = {
  search: query => axios.get(URL + query + KEY)
}

export default API;
