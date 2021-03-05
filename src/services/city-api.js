import axios from 'axios';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

// eslint-disable-next-line import/prefer-default-export
export const fetchCity = city =>
  axios.get(`/weather?q=${city}&appid=bad46dfee1ae1125ec4faf31e63449de`);
