import { RootState } from "../../../../app/Store";

export const selectScoreCounter = (state: RootState) => state.score.score;