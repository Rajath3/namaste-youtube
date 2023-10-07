import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        toggleMenu: true
    },
    reducers: {
        toggle: (state, action) => {
            state.toggleMenu = !state.toggleMenu
        },
        closeMenu: (state) => {
            state.toggleMenu = false
        }
    }
})

export const {toggle, closeMenu} = appSlice.actions;

export default appSlice.reducer;