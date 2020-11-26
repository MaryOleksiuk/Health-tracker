import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions';
import { useProfile } from './useProfile';

export const useProfileInit = () => {
  const dispatch = useDispatch();

  const { profile } = useProfile();

  useEffect(() => {
    if (profile === null) {
      dispatch(userActions.getUserAsync());
    }
  }, [dispatch, profile]);
};
