import { types } from "./types";

const initialState = {
  isLoading: false,
  error: null,
  profile: null
};


export const userReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.USER_START_REQUEST:
      return { ...state, isLoading: true };
    case types.USER_STOP_REQUEST:
      return { ...state, isLoading: false };
    case types.USER_PROFILE_FILL:
      return { ...state, profile: payload };


    case types.USER_REGISTER_FAIL:
      return { ...state, error: payload };
    case types.USER_LOGIN_FAIL:
      return { ...state, error: payload };
    case types.USER_GET_USER_FAIL:
      return { ...state, error: payload };
    case types.USER_UPDATE_USER_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};
