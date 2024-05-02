import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../features/cardsFlipper";
import { ScoreReducer } from "../features/scoreCounter";
import { comparatorReducer } from "../features/cardsComparator";
import { cardsReducer } from "../widgets/cards";

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