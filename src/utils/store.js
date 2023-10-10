import { configureStore } from "@reduxjs/toolkit";
import appNavSlice from "./appNavSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        store: appNavSlice,
        search: searchSlice,
        chat: chatSlice
    }
})

export default store;