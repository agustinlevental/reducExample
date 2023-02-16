import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const fetchUserData = () => {
  return (dispatch) => {
    axios.get('/api/user').then((response) => {
      dispatch({
        type: FETCH_USER_DATA,
        payload: response.data,
      });
    })
    .catch((error) => {
        console.error("Error getting user data:", error);
      });
  };
};

export const saveUserData = (userId, userData) => {
  return (dispatch) => {
    axios.post(userId ? `/api/user/${userId}` : null, userData)
      .then((response) => {
        dispatch({
          type: SAVE_USER_DATA,
          payload: response.userData,
        });
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
      });
  };
};
