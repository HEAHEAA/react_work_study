import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './feature/counter/counterSlice.jsx';
import {ReCounterAction} from './feature/arr-counter/ArrayCounterSlice.jsx';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // arrayCounter: ArrCounterAction,
        reArrayCounter: ReCounterAction
    },
})
