export const ActionCity = {
  GET_CITY_REQUEST: 'GET_CITY_REQUEST',
  GET_CITY_SUCCESS: 'GET_CITY_SUCCESS',
  GET_CITY_FAILURE: 'GET_CITY_FAILURE',
  GET_CITY_FULFILL: 'GET_CITY_FULFILL',
  SET_INPUT: 'SET_INPUT',
};

export const getCityRequest = payload => ({
  type: ActionCity.GET_CITY_REQUEST,
  payload,
});

export const getCitySuccess = payload => ({
  type: ActionCity.GET_CITY_SUCCESS,
  payload,
});

export const getCityFailure = payload => ({
  type: ActionCity.GET_CITY_FAILURE,
  payload,
});

export const getCityFulfill = payload => ({
  type: ActionCity.GET_CITY_FULFILL,
  payload,
});

export const setInput = payload => ({
  type: ActionCity.SET_INPUT,
  payload,
});
