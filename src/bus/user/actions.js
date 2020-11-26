import { replace } from 'connected-react-router';
import { types } from './types';
import { api } from '../../api';
import { healthAppRoutes } from '../../navigation/healthAppRoutes';
import { history } from '../../navigation/history';


export const userActions = Object.freeze({
  startRequest: () => {
    return {
      type: types.USER_START_REQUEST
    }
  },
  stopRequest: () => {
    return {
      type: types.USER_STOP_REQUEST
    }
  },
  fillUser: (payload) => {
    return {
      type: types.USER_PROFILE_FILL,
      payload
    }
  },

  registerFail: (error) => {
    return {
      type: types.USER_REGISTER_FAIL,
      error: true,
      payload: error
    }
  },
  registerAsync: (user) => async (dispatch) => {
    dispatch({
      type: types.USER_REGISTER_ASYNC
    });
    dispatch(userActions.startRequest());

    const response = await api.user.register(user);

    if(response.status === 201) {
      // const user = await response.json();
      // dispatch(userActions.fillUser(user));
      history.push(healthAppRoutes.login);
    } else {
      const error = {
        status: response.status
      }
      dispatch(userActions.registerFail(error));
    }

    dispatch(userActions.stopRequest());
  },

  loginFail: (error) => {
    return {
      type: types.USER_LOGIN_FAIL,
      error: true,
      payload: error
    }
  },
  loginAsync: (payload) => async (dispatch) => {
    dispatch({
      type: types.USER_LOGIN_ASYNC,
      payload
    });
    dispatch(userActions.startRequest());

    const response = await api.user.login(payload);

    if(response.status === 200) {
      localStorage.setItem('loggedIn', 'true');
      dispatch(replace(healthAppRoutes.root));
    } else {
      const error = {
        status: response.status
      }
      dispatch(userActions.loginFail(error));
    }

    dispatch(userActions.stopRequest());
  },

  getUserFail: (error) => {
    return {
      type: types.USER_GET_USER_FAIL,
      error: true,
      payload: error
    }
  },
  getUserAsync: () => async (dispatch) => {
    dispatch({
      type: types.USER_GET_USER_ASYNC
    });

    dispatch(userActions.startRequest());
    const response = await api.user.getUser();

    if(response.status === 200) {
      const { data } = await response.json();
      dispatch(userActions.fillUser(data));
    } else {
      const error = {
        status: response.status
      }
      dispatch(userActions.getUserFail(error));
    }

    dispatch(userActions.stopRequest());
  },

  updateUserFail: (error) => {
    return {
      type: types.USER_UPDATE_USER_FAIL,
      error: true,
      payload: error
    }
  },
  updateUserAsync: (user) => async (dispatch) => {
    dispatch({
      type: types.USER_UPDATE_USER_ASYNC
    });
    dispatch(userActions.startRequest());

    const response = await api.user.updateUser(user);

    if(response.status === 200) {
      const { data } = await response.json();
      dispatch(userActions.fillUser(data));
    } else {
      const error = {
        status: response.status
      }
      dispatch(userActions.updateUserFail(error));
    }

    dispatch(userActions.stopRequest());
  },

  logoutFail: (error) => {
    return {
      type: types.USER_LOGOUT_FAIL,
      error: true,
      payload: error
    }
  },
  logoutAsync: () => async (dispatch) => {
    dispatch({
      type: types.USER_LOGOUT_ASYNC
    });

    dispatch(userActions.startRequest());
    const response = await api.user.logout();

    if(response.status === 204) {
      localStorage.removeItem('loggedIn');
      dispatch(replace(healthAppRoutes.login));
    } else {
      const error = {
        status: response.status
      }
      dispatch(userActions.logoutFail(error));
    }

    dispatch(userActions.stopRequest());
  },
});

