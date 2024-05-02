interface Responce {
    data: Array<Card>;
}

interface Card {
    id: string,
    images: Images;
}

interface Images {
    large: string;
    small: string;
}

interface CardProps {
    id: string,
    frontUrl: string,
    backUrl: string,
}

interface CardsState {
    imagesUrls: Array<CardProps>;
}