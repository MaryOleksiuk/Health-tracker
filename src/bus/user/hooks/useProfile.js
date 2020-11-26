import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../actions';

export const useProfile = () => {
  const dispatch = useDispatch();

  let { profile, isLoading } = useSelector(state => state.user);

  const login = (credentials) => {
    dispatch(userActions.loginAsync(credentials));
  }

  const register = (user) => {
    dispatch(userActions.registerAsync(user));
  }

  const logout = () => {
    dispatch(userActions.logoutAsync());
  }

  const updateUser = (user) => {
    dispatch(userActions.updateUserAsync(user));
  }


  return {
    profile,
    isLoading,

    register,
    login,
    logout,
    updateUser
  }
}
