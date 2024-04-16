import { configureStore } from "@reduxjs/toolkit";
import mobileNavToggleReducer from "./mobileNavToggleSlice";
import scrollTopReducer from "./scrollTopSlice";

export default configureStore({
    reducer: {
        mobileNavToggle: mobileNavToggleReducer,
        scrollTop: scrollTopReducer
    },
})