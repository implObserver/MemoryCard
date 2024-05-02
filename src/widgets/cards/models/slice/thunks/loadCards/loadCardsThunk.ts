import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCardsImages } from "../../../../lib/helpers/ImagesOfCards";

export const addNewCardsAsync = createAsyncThunk(
    'cards/reloadCards',
    async () => {
        const cardsImages = await getCardsImages();
        return cardsImages;
    }
)