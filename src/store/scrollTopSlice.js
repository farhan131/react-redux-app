import { createSlice } from "@reduxjs/toolkit"

export const scrollTopSlice = createSlice({
    name: 'scrollTop',
    initialState: {
        active: false
    },
    reducers: {
        activate: state => {
            state.active = true
        },
        deactivate: state => {
            state.active = false
        }
    }
})

export const { activate, deactivate } = scrollTopSlice.actions
export default scrollTopSlice.reducer