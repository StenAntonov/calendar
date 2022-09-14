import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: { value: 2},
    reducers: {
        increment: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { increment } = countSlice.actions;

export default countSlice.reducer;