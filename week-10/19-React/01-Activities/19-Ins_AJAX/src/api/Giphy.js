import axios from 'axios';

const url = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&q=';

const Giphy = {
    search: term => axios.get(url + term)
};

export default Giphy;