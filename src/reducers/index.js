import {combineReducers} from "redux";
import BlogReducer from "./blog_reducer";

export default combineReducers({
    blog: BlogReducer
});