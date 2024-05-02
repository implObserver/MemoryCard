import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        open: (state) => {
            state.cardFlipper = false;
        },
        close: (state) => {
            state.cardFlipper = true;
        },
        changed: (state, action: PayloadAction<boolean>) => {
            state.cardFlipper = action.payload;
        },
        setId: (state, action: PayloadAction<String>) => {
            state.id = action.payload;
        }
    }
});

export const { changed, open, close, setId } = cardSlice.actions;

export default cardSlice.reducer;