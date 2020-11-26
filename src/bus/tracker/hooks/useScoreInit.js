import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useScore } from './useScore';
import { trackerActions } from '../actions';

export const useScoreInit = () => {
  const { score } = useScore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (score === null) {
      dispatch(trackerActions.getScoreAsync());
    }
  }, [dispatch, score]);
};
