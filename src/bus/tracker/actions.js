import { batch } from 'react-redux';
import { types } from './types';
import { api } from '../../api';
import { replace } from 'connected-react-router';
import { healthAppRoutes } from '../../navigation/healthAppRoutes';

export const trackerActions = Object.freeze({
  startRequest: () => {
    return {
      type: types.TRACKER_START_REQUEST
    }
  },
  stopRequest: () => {
    return {
      type: types.TRACKER_STOP_REQUEST
    }
  },

  fillRecord: (payload) => {
    return {
      type: types.TRACKER_RECORD_FILL,
      payload
    }
  },
  fillScore: (payload) => {
    return {
      type: types.TRACKER_SCORE_FILL,
      payload: payload / 2
    }
  },

  getRecordFail: (error) => {
    return {
      type: types.TRACKER_GET_RECORD_FAIL,
      error: true,
      payload: error
    }
  },
  getRecordAsync: (payload) => async (dispatch) => {
    dispatch({
      type: types.TRACKER_GET_RECORD_ASYNC,
      payload
    });

    dispatch(trackerActions.startRequest());
    const response = await api.tracker.getRecord({
      type: payload
    });

    if(response.status === 200) {
      const { data, hash } = await response.json();

      if(hash !== 0) {
        dispatch(trackerActions.fillRecord({
          type: payload,
          value: {
            hash,
            value: data
          }
        }));
      }
    } else {
      const error = {
        status: response.status
      }
      dispatch(trackerActions.getRecordFail(error));
    }

    dispatch(trackerActions.stopRequest());
  },

  createRecordFail: (error) => {
    return {
      type: types.TRACKER_CREATE_RECORD_FAIL,
      error: true,
      payload: error
    }
  },
  createRecordAsync: (payload) => async (dispatch) => {
    dispatch({
      type: types.TRACKER_CREATE_RECORD_ASYNC,
      payload
    });

    dispatch(trackerActions.startRequest());
    const response = await api.tracker.createRecord(payload);

    if(response.status === 201) {
      const { data } = await response.json();

      batch(() => {
        dispatch(trackerActions.fillRecord({
          type: payload.type,
          value: {
            hash: data.hash,
            value: payload.record
          }
        }));
        dispatch(trackerActions.getScoreAsync());
      });
    } else {
      const error = {
        status: response.status
      }
      dispatch(trackerActions.createRecordFail(error));
    }

    dispatch(trackerActions.stopRequest());
  },

  getScoreFail: (error) => {
    return {
      type: types.TRACKER_GET_SCORE_FAIL,
      error: true,
      payload: error
    }
  },
  getScoreAsync: () => async (dispatch) => {
    dispatch({
      type: types.TRACKER_GET_SCORE_ASYNC
    });

    dispatch(trackerActions.startRequest());
    const response = await api.tracker.getScore();

    if(response.status === 200) {
      const { data } = await response.json();

      dispatch(trackerActions.fillScore(data));
    } else {
      const error = {
        status: response.status
      }
      dispatch(trackerActions.getScoreFail(error));
    }

    dispatch(trackerActions.stopRequest());
  },

  updateRecordFail: (error) => {
    return {
      type: types.TRACKER_UPDATE_RECORD_FAIL,
      error: true,
      payload: error
    }
  },
  updateRecordAsync: (payload) => async (dispatch) => {
    dispatch({
      type: types.TRACKER_UPDATE_RECORD_ASYNC,
      payload
    });

    dispatch(trackerActions.startRequest());
    const response = await api.tracker.updateRecord(payload);

    if(response.status === 204) {
      batch(() => {
        dispatch(trackerActions.fillRecord({
          type: payload.type,
          value: {
            hash: payload.hash,
            value: payload.record
          }
        }));
        dispatch(trackerActions.getScoreAsync());
      });
    } else {
      const error = {
        status: response.status
      }
      dispatch(trackerActions.updateRecordFail(error));
    }

    dispatch(trackerActions.stopRequest());
  },

  resetScoreFail: (error) => {
    return {
      type: types.TRACKER_RESET_SCORE_FAIL,
      error: true,
      payload: error
    }
  },
  resetScoreAsync: () => async (dispatch) => {
    dispatch({
      type: types.TRACKER_RESET_SCORE_ASYNC
    });

    dispatch(trackerActions.startRequest());
    const response = await api.tracker.resetScore();

    if(response.status === 204) {
      dispatch(trackerActions.getScoreAsync());
      dispatch(replace(healthAppRoutes.root));
    } else {
      const error = {
        status: response.status
      }
      dispatch(trackerActions.resetScoreFail(error));
    }

    dispatch(trackerActions.stopRequest());
  },
});

