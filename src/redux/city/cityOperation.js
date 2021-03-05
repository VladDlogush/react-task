import { fetchCity } from '../../services/city-api';
import {
  getCityRequest,
  getCitySuccess,
  getCityFailure,
  getCityFulfill,
} from './cityActions';

// eslint-disable-next-line import/prefer-default-export
export const getCity = city => dispatch => {
  dispatch(getCityRequest());
  fetchCity(city)
    .then(data => dispatch(getCitySuccess(data)))
    .catch(error => dispatch(getCityFailure(error)))
    .finally(() => dispatch(getCityFulfill()));
};
