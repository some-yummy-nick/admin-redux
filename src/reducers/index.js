import { combineReducers } from "redux";
import item from "./item";
import auth from "./auth";

export default combineReducers({
	item,
	auth
});