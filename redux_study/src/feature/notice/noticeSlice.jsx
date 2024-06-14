import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src";
import axios from "axios";


const initialState = {
    noticeList: [],
    isSuccess: false,
    isLoading: false,
    updateState: false,
    error: null,
};

export const fetchNotice  = createAsyncThunk(
    "notice/fetchNotice", async () => {
        const response = await axios.get(`/api/no/list`);
        return response.data.data;
    }
);

//notice add
export const addNotice = createAsyncThunk(
    "notice/addNotice",
    async (data) => {
        const response = await axios({
            method: "POST",
            url: "/api/no/insert",
            headers: {Authorization: 'Bearer ' + access},
            data: {
                notice_type: data.notice_type,
                notice_content:data.notice_content,
                start_week: data.start_week
            }
        })
        return initialState.noticeList;
    }
);




const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
        changeTrue: (state) => {
            state.updateState = true;
        },
        changeFalse : (state) => {
            state.updateState = false;
        },
    },
    extraReducers: {
        [fetchNotice.pending] : (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        },
        [fetchNotice.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.noticeList = action.payload;
        },
        [fetchNotice.rejected] : (state,action) => {
            state.isSuccess = false;
            state.noticeList = action.payload;
        },

        //add
        [addNotice.pending] : (state) => {
            state.isLoading = true;
        },
        [addNotice.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.noticeList = action.payload;
        },
        [addNotice.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }

    }
})

export default noticeSlice.reducer;
export const {changeTrue,changeFalse} = noticeSlice.actions;
