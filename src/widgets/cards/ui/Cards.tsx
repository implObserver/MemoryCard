import styles from '../styles/Cards.module.css';
import { useEffect, useState } from "react";
import { addNewCardsAsync, shuffleCards } from "../models/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "../../../app/Store";
import { Context } from "../lib/context/Context";
import { Card } from "../../../features/cardsFlipper";
import { removeIds } from "../../../features/cardsComparator";
import { increments, remove, setBest } from "../../../features/scoreCounter";
import { selectCards, selectComparator } from '../models/slice/selectors';


export const Cards = () => {
    const cardsProps = useSelector(selectCards);
    const isCompare = useSelector(selectComparator);
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
        <div
            className={`${styles.cards} ${isBlock ? styles.block : ''}`}
            onClick={clickHandle}
        >
            {fillInTheCards()}
        </div>
    )
}