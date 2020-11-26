import { useSelector, useDispatch } from 'react-redux';
import { trackerActions } from '../actions';

export const useRecord = () => {
  const dispatch = useDispatch();

  const { record, isLoading } = useSelector(state => state.tracker);

  const createRecord = (type, record) => {
    dispatch(trackerActions.createRecordAsync({type, record}));
  };
  const updateRecord = (type, record, hash) => {
    dispatch(trackerActions.updateRecordAsync({type, record, hash}));
  }

  return {
    createRecord,
    updateRecord,
    record,
    isLoading
  }
}
