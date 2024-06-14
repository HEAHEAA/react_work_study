import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src";
import axios from "axios";

const API_URL = 'http://localhost:4000/board'
export const fetchBoard = createAsyncThunk(
    'get/getBoard', async () => {
        const res = await axios.get(`${API_URL}`);
        return res.data;
    }
);

const initialState = {
    data: [],
    isSuccess: false,
    isLoading: false,
    error: null,
};

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBoard.pending]: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        },
        [fetchBoard.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        },
        [fetchBoard.rejected]: (state,action) => {
            state.isSuccess = false;
            state.data = action.payload;
        }
    }

});



export default boardSlice.reducer;
