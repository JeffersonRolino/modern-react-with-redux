import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY; 

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
}

export default searchImages;