import { RootState } from "../../../../app/Store";

export const selectCards = (state: RootState) => state.cardsContainer.imagesUrls;
export const selectComparator = (state: RootState) => state.comparator.isCompare;