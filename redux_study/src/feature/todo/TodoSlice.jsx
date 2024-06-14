import {createAsyncThunk} from "@reduxjs/toolkit/src";
import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const api_url = 'http://localhost:4000/board'

const todoState = {
    todoList: [],
    updateState: false,
    loading: false,
    error: null,
    response: null
};

//전체 조회
export const fetchTodo = createAsyncThunk(
    "todo/fetchTodo",
    async () => {
        const response = await axios.get(`${api_url}`);
        return response.data;
    }
);

//todo 추가
export const addTodo = createAsyncThunk(
    "todo/addTodo",
    async (data) => {
        const response = await axios.post(`${api_url}`,{
            title: data.title,
            content: data.content,
            writer: data.writer,
            gender: data.gender,
            heart: 0
        });
        return response.data
    }
);

export const removeTodo = createAsyncThunk(
    "todo/removeTodo",
    async (data) => {
        const response = await axios.delete(`${api_url}/${data}`);
        console.log(response.data);
        return response.data;
    }
);

export const updateTodo = createAsyncThunk(
    "todo/updateTodo",
    async (data) => {
        const response = await axios.put(`${api_url}/${data.id}`,{
            id: data.id,
            title: data.title,
            content: data.content,
            writer: data.writer,
            gender: parseInt(data.gender),
            heart: data.heart
        });
        console.log(response.data);
        return response.data;
    }
);

const todoSlice = createSlice({
    name: "todo",
    initialState: todoState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.response = "";
        },
    },
    extraReducers: (builder) => {
        //add
        builder
            .addCase(addTodo.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todoList.push(action.payload);
                state.response = "add";
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        //list
        builder
            .addCase(fetchTodo.fulfilled, (state, action) => {
                // let data = action.payload;
                // let result = [];
                // for(let i =0; i<data.length; i++){
                //     if(data[i].id === '1'){
                //         result.push(data[i]);
                //     }
                // }
                // state.todoList = result;
                state.todoList = action.payload;
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.error = action.error.message;
            });

        //delete
        builder.addCase(removeTodo.fulfilled, (state, action) => {
            state.todoList = state.todoList.filter(
                (item) => item.id != action.payload
            );
            state.response = "delete";
        });

        //update
        builder.addCase(updateTodo.fulfilled,(state, action) => {
            const updateItem = action.payload;
            const index = state.todoList.findIndex(
                (item) => item.id === updateItem.id
            );
            if(index!==-1){
                state.todoList[index] = updateItem;
            }
            state.response = "update";
        });
    },
});
export default todoSlice.reducer;
export const {changeStateTrue,changeStateFalse,clearResponse} = todoSlice.actions;
