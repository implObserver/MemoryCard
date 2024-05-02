import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increments: (state) => {
            state.score++;
        },
        remove: (state) => {
            state.score = 0;
        },
        setBest: (state) => {
            const correctlyScore = state.score - 1;
            if (state.best < correctlyScore) {
                state.best = correctlyScore;
            }
        }
    }
})

export const { increments, remove, setBest } = scoreSlice.actions;
export default scoreSlice.reducer;