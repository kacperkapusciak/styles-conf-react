import axios from "axios-instance";
import {
  PURCHASE_PASS_START,
  PURCHASE_PASS_SUCCESS,
  PURCHASE_PASS_FAIL
} from "store/actions/types";

export const purchasePassStart = () => ({
  type: PURCHASE_PASS_START
});

export const purchasePassSuccess = id => ({
  type: PURCHASE_PASS_SUCCESS,
  payload: id
});

export const purchasePassFail = error => ({
  type: PURCHASE_PASS_FAIL,
  error: error
});

export const purchasePass = registerData => dispatch => {
  dispatch(purchasePassStart());
  return axios
    .post("/register.json", registerData)
    .then(response => {
      dispatch(purchasePassSuccess(response.data));
    })
    .catch(error => {
      dispatch(purchasePassFail(error));
    });
};
