import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CardsComparator {
    ids: Array<String>,
    isCompare: boolean,
}

const initialState: CardsComparator = {
    ids: [],
    isCompare: false,
}

const comparatorSlice = createSlice({
    name: "comparator",
    initialState,
    reducers: {
        compareId: (state, action: PayloadAction<String>) => {
            state.isCompare = state.ids.includes(action.payload);
            state.ids.push(action.payload);
        },
        addId: (state, action: PayloadAction<String>) => {
            state.ids.push(action.payload);
        },
        removeIds: (state) => {
            state.ids = [];
        }
    }
});

export const { compareId, addId, removeIds } = comparatorSlice.actions;

export default comparatorSlice.reducer;