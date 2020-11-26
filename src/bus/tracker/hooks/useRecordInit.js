import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useRecord } from './useRecord';
import { trackerActions } from '../actions';

export const useRecordInit = (type) => {
  const { record } = useRecord();
  const dispatch = useDispatch();

  useEffect(() => {
    if (record[type] === null) {
      dispatch(trackerActions.getRecordAsync(type));
    }
  }, [dispatch, record, type]);
};
