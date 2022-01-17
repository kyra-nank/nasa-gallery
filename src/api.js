import axios from 'axios';
import keys from './config/keys';

async function getImages() {

  const config = {
    method: 'get',
    url: 'https://images-api.nasa.gov/search?media_type=image',
    headers: { 'authorization': keys.NASA_KEY }
  }

  try {
    let response = await axios(config);
    return response.data;
  } catch (err) {
    console.log(err)
  }

}

export default getImages;