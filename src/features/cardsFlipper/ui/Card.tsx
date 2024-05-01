import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/Store"
import styles from '../styles/Flipper.module.css'
import { PersonCard } from "../../../entities/personCard";
import { changed, close, open, setId } from "../models/slice/slice";
import { useEffect, useState } from "react";
import { shuffleCards } from "../../../widgets/cards/models/slice/slice";
import { useThisContext } from "../../../widgets/cards/lib/context/Context";
import { addId, compareId } from "../../cardsComparator/models/slice/slice";

export const Card = () => {
    const state = useSelector((state: RootState) => state.card.cardFlipper);
    const dispath = useDispatch();
    const props = useThisContext();

    const clickHandle = () => {
        dispath(compareId(props.id));
       // dispath(addId(props.id));
        flipCards();
    }

    const flipCards = () => {
        dispath(close());
        setTimeout(() => {
            dispath(open());
        }, 400);
    }

    useEffect(() => {
        setTimeout(() => {
            dispath(open());
        }, 1000);
    }, [])

    return (
        <>
            <div className={`${styles.flipper} ${state ? styles.close : ''}`}
                onClick={clickHandle} >
                <PersonCard></PersonCard>
            </div>
        </>
    )
}