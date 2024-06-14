import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './feature/counter/counterSlice.jsx';
import arrayCounter from './feature/counter/arrayCounterSlice.jsx';
import dummyReducer from './feature/list/listSlice.jsx';
import boardReducer from './feature/board/boardSlice.jsx';
import todoReducer from './feature/todo/TodoSlice.jsx';
import noticeReducer from './feature/notice/noticeSlice.jsx';


export const store = configureStore({
    reducer : {
        counter: counterReducer,
        arrayCounterSlice: arrayCounter,
        dummy: dummyReducer,
        board: boardReducer,
        todo: todoReducer,
        notice: noticeReducer,
    },
})
