import { addNewCardsAsync, shuffleCards } from "../models/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../../app/Store";
import styles from '../styles/Cards.module.css';
import { PersonCard } from "../../../entities/personCard";
import { Context } from "../lib/context/Context";

import { useEffect, useState } from "react";
import { Card } from "../../../features/cardsFlipper";
import { changed, close, open } from "../../../features/cardsFlipper/models/slice/slice";
import { increments, remove, setBest } from "../../../features/scoreCounter/model/slice/slice";
import { Root } from "react-dom/client";
import { compareId, removeIds } from "../../../features/cardsComparator/models/slice/slice";

export const Cards = () => {
    const cardsProps = useSelector((state: RootState) => state.cardsContainer.imagesUrls);
    const isCompare = useSelector((state: RootState) => state.comparator.isCompare);
    const [isBlock, setBlock] = useState(false);
    const dispath = useDispatch<AppDispath>();

    useEffect(() => {
        dispath(addNewCardsAsync());
    }, [])

    useEffect(() => {
        if (isCompare) {
            dispath(setBest());
            dispath(remove());
            dispath(removeIds());
        }
    }, [isCompare])

    const clickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'IMG') {
            dispath(increments());
            timeBlock();
            setTimeout(() => {
                dispath(shuffleCards());
            }, 350);
        }
    }

    const timeBlock = () => {
        setBlock(true);
        setTimeout(() => {
            setBlock(false);
        }, 700);
    }

    const fillInTheCards = () => {
        return cardsProps.map((props: CardProps) => {
            return (
                <Context.Provider key={props.id} value={props}>
                    <Card></Card>
                </Context.Provider>
            )
        })
    }

    return (
        <div className={`${styles.cards} ${isBlock ? styles.block : ''}`}
            onClick={clickHandle}>
            {fillInTheCards()}
        </div>
    )
}