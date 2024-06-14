import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        plus: (state) => {
            state.value += 1
        },
        minus: (state) => {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload
        },
    },
});


export const {plus,minus,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
