import { combineReducers } from "redux";
import {CouresReducer} from './CouresReducer';
import {UserReducer} from './UserReducer'
//store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi đây chứa các reducer  cho nghiệp vụ (store con)
    CouresReducer,
    UserReducer
})