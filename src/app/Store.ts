import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "../widgets/cards";
import { cardReducer } from "../features/cardsFlipper";
import { ScoreReducer } from "../features/scoreCounter";
import { comparatorReducer } from "../features/cardsComparator";

export const store = configureStore({
    reducer: {
        card: cardReducer,
        cardsContainer: cardsReducer,
        score: ScoreReducer,
        comparator: comparatorReducer,
    },
})

console.log(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;