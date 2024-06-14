import {createSlice} from "@reduxjs/toolkit";
import {dummyList} from "./dummy-data.jsx";

export const listSlice = createSlice({
    name: "list",
    initialState: dummyList,
    reducers : {
        // true&false - 변경 action
        trueFalseAction(state,action){
            state[action.payload].completed = !state[action.payload].completed;
        },
        // counter - 추가
        counterPlus(state,action){
            state[action.payload].count ++;
        },
        // counter - 빼기
        counterMinus(state,action){
            state[action.payload].count --;
        }
    }
});

export const {
    trueFalseAction,
    counterPlus,
    counterMinus,
} = listSlice.actions
export default listSlice.reducer
