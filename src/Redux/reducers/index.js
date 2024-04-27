import { combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "../reducers/authReducer";
import getterSlicer from '../reducers/authReducer'


export default combineReducers({
    authenticationSlice,
    tutorSlicer: getterSlicer
});