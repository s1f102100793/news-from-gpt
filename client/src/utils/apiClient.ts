import aspida from '@aspida/axios';
import api from 'api/$api';
import axios from 'axios';

export const apiClient = api(
  aspida(
    axios.create({
      baseURL: 'https://news-from-gpt-backend-59f4f221099f.herokuapp.com/',
      withCredentials: true,
    })
  )
);
