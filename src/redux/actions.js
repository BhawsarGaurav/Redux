import axios from "axios";
import * as types from "./actionType";

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});
export const loadProducts = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/products").then((res) => {
      dispatch(getProducts(res.data));
    });
  };
};
