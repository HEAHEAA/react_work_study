import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, counterValue: 0},
    {id: 2, counterValue: 0}
]

const reArray = [
    {id: 1, name: "kim", age: 30},
    {id: 2, name: "jang", age: 45}
]

const arrCounterSlice = createSlice({
    name: "arrayCounter",
    initialState: initialState,
    reducers: {
        addCounter(state,action){
            state[action.payload].counterValue++
        }
    }
})

const reArraySlice = createSlice({
    name: "reArray",
    initialState: reArray,
    reducers: {
        agePlus(state,action) {
            state[action.payload].age ++
        },
        ageMinus(state,action){
            state[action.payload].age --
        }
    }
})


// export const ArrCounterAction = arrCounterSlice.actions;
export const ReCounterAction = reArraySlice.actions;

