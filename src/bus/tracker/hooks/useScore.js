import { useSelector, useDispatch } from 'react-redux';
import { trackerActions } from '../actions';

export const useScore = () => {
  const dispatch = useDispatch();

  const { score } = useSelector(state => state.tracker);

  const resetScore = () => {
    dispatch(trackerActions.resetScoreAsync());
  }

  return {
    resetScore,
    score
  }
}
