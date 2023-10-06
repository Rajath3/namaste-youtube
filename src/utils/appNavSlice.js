import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        toggleMenu: true
    },
    reducers: {
        toggle: (state, action) => {
            state.toggleMenu = !state.toggleMenu
        }
    }
})

export const {toggle} = appSlice.actions;

export default appSlice.reducer;