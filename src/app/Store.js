import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../option/userSlice";

export default configureStore({
    reducer:{
        user:userReducer,
    },
})