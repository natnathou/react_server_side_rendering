import axios from 'axios';

export const fetchUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/users');
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};
