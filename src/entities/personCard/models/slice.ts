import { createSlice } from "@reduxjs/toolkit";

interface CheckCardState {
    value: Boolean;
}

const initialState: CheckCardState = {
    value: false,
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        check: (state) => {
            state.value = !state.value;
            console.log(state.value)
        }
    }
});

export const { check } = cardSlice.actions;

export default cardSlice.reducer;