import { FETCH_USER_PROFILE, SAVE_USER_PROFILE } from "../actions/userProfile.actions";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    case SAVE_USER_PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};
