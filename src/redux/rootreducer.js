import { combineReducers } from "redux";
import productsReducer from "./productReducer";

const rootreducer = combineReducers({
  products: productsReducer,
});

export default rootreducer;
