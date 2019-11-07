//Action
export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

//Action Creator
export const nameDayLoading = () => ({ type: FETCH_DATA_LOADING });
export const nameDayLoadSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});
export const nameDayFail = error => ({
  type: FETCH_DATA_FAIL,
  payload: error
});

//Middleware Setup
export function fetchNameDay() {
  return function(dispatch) {
    dispatch(nameDayLoading());

    return fetch(`https://api.abalin.net/get/today`)
      .then(response => response.json())
      .then(json => dispatch(nameDayLoadSuccess(json.data)))
      .catch(error => dispatch(nameDayFail(error)));
  };
}
