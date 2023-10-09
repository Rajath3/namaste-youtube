import { configureStore } from "@reduxjs/toolkit";
import appNavSlice from "./appNavSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        store: appNavSlice,
        search: searchSlice
    }
})

export default store;