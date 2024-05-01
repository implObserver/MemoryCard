import { createSlice } from "@reduxjs/toolkit";

interface Score {
    score: number,
    best: number,
}

const initialState: Score = {
    score: 0,
    best: 0,
}

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
            state.best = state.score - 1;
        }
    }
})

export const { increments, remove, setBest } = scoreSlice.actions;
export default scoreSlice.reducer;