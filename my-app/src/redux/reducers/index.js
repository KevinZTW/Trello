import listReducer from "./listReducer";
import cardReducer from "./cardReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  listReducer: listReducer,
  cardReducer: cardReducer,
});

export default allReducers;
