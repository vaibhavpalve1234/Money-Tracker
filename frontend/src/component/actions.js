import axios from 'axios';

export const signup = (userData) => (dispatch) => {
  return axios
    .post('/api/signup', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token); // you can store token in localstorage
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
      return response;
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_FAIL', payload: err.response });
      throw err;
    });
};

export const login = (username, password) => (dispatch) => {
  return axios
    .post('/api/login', { username, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      return response;
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response });
      throw err;
    });
};
