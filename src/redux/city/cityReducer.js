import { ActionCity } from './cityActions';

const initialState = {
  data: {},
  input: '',
  isLoadingCity: false,
  showChart: false,
  error: '',
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionCity.GET_CITY_REQUEST:
      return {
        ...state,
        isLoadingCity: true,
      };
    case ActionCity.GET_CITY_SUCCESS:
      return {
        ...state,
        data: payload,
        showChart: true,
        error: '',
      };
    case ActionCity.GET_CITY_FAILURE:
      return {
        ...state,
        error: payload,
        showChart: false,
      };
    case ActionCity.SET_INPUT:
      return {
        ...state,
        input: payload,
      };
    case ActionCity.GET_CITY_FULFILL:
      return {
        ...state,
        isLoadingCity: false,
      };
    default:
      return initialState;
  }
};

export default cityReducer;
