import { configureStore } from "@reduxjs/toolkit";
import appNavSlice from "./appNavSlice";

const store = configureStore({
    reducer: {
        store: appNavSlice
    }
})

export default store;