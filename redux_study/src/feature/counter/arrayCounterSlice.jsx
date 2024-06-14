import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, counterValue: 0},
    {id: 2, counterValue: 0}
]

export const arrayCounterSlice = createSlice({
    name: "arrayCounter",
    initialState,
    reducers: {
        addCounter(state,action) {
            state[action.payload].counterValue++
        },
        minusCounter(state,action){
            state[action.payload].counterValue--
        },

    }
})

export const {addCounter,minusCounter} = arrayCounterSlice.actions
export default arrayCounterSlice.reducer
