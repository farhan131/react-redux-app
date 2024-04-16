import { createSlice } from "@reduxjs/toolkit";

export const mobileNavToggleSlice = createSlice({
    name: 'mobileNavToggle',
    initialState: {
        visible: false
    },
    reducers: {
        toggle: state => {
            state.visible ? state.visible = false : state.visible = true
        }
    }
})

export const { toggle } = mobileNavToggleSlice.actions
export default mobileNavToggleSlice.reducer