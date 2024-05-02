import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardsImages } from "../../lib/helpers/ImagesOfCards";
import { shuffle } from "../../../../shared/lib/helpers/Shuffle";
import { initialState } from "./defaultState";
import { addNewCardsAsync } from "./thunks/loadCards/loadCardsThunk";

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        shuffleCards: (state) => {
            shuffle(state.imagesUrls);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewCardsAsync.pending, () => {
                console.log("addNewCardsAsync.pending")
            })
            .addCase(addNewCardsAsync.fulfilled, (
                state: CardsState,
                action: PayloadAction<Array<CardProps>>
            ) => {
                state.imagesUrls = action.payload;
            })
    }

})

export const { shuffleCards } = cardsSlice.actions;
export default cardsSlice.reducer;