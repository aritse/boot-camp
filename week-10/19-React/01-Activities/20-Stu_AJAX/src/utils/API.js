import axios from 'axios';

const api = {
  search: (term) => axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${term}`)
};
export default api;