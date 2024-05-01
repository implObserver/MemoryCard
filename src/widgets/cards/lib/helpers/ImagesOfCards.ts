import { getRandomCards } from "../../api/CardApi";
import { backUrl } from "../../components/card/consts/Consts";

export const getCardsImages = async () => {
    const response = <Responce>await getRandomCards();
    const cards = response.data;
    const imagesProps = new Array<CardProps>;
    cards.forEach(card => {
        imagesProps.push({ id: card.id, frontUrl: card.images.large, backUrl: backUrl });
    })
    return imagesProps;
}