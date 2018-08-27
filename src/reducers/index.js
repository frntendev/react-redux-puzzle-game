import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import levelInfo from "./levelReducer";
import items from "./itemsReducer";

export default combineReducers({
  routing: routerReducer,
  items,
  levelInfo
});
