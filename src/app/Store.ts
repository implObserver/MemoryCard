import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../entities/personCard";

export const store = configureStore({
    reducer: {
        card: cardReducer,
    },
})

console.log(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;