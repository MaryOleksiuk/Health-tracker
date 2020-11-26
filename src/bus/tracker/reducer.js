import { types } from './types';

const initialState = {
  isLoading: false,
  error: null,
  record: {
    breakfast: null,
    coffee: null,
    dinner: null,
    fruits: null,
    junk: null,
    lunch: null,
    sleep: null,
    steps: null,
    vegetables: null,
    water: null
  },
  score: null
};


export const trackerReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.TRACKER_START_REQUEST:
      return { ...state, isLoading: true };
    case types.TRACKER_STOP_REQUEST:
      return { ...state, isLoading: false };

    case types.TRACKER_GET_RECORD_FAIL:
      return { ...state, error: action.payload };

    case types.TRACKER_CREATE_RECORD_FAIL:
      return { ...state, error: action.payload };

    case types.TRACKER_UPDATE_RECORD_FAIL:
      return { ...state, error: action.payload };

    case types.TRACKER_GET_SCORE_FAIL:
      return { ...state, error: action.payload };

    case types.TRACKER_RESET_SCORE_FAIL:
      return { ...state, error: action.payload };

    case types.TRACKER_RECORD_FILL:
      return {
        ...state,
        record: {
          ...state.record,
          [action.payload.type]: action.payload.value
        }};

    case types.TRACKER_SCORE_FILL:
      return {
        ...state,
        score: action.payload
      }

    default:
      return state;
  }
};
