import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../action";

const initialState = {
  data: [],
  isFetching: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default reducer