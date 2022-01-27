import { createStore,applyMiddleware ,compose} from "redux";
import reduxThunk from "redux-thunk";
import rootreducer from "./rootreducer";

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares=[reduxThunk];
const store=createStore(rootreducer,composeEnhancers(applyMiddleware(...middlewares)));
export default store;