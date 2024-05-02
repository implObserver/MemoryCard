import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/Store"
import styles from '../styles/Flipper.module.css'
import { PersonCard } from "../../../entities/personCard";
import { close, open } from "../models/slice/slice";
import { useEffect } from "react";
import { compareId } from "../../cardsComparator";
import { useCardsContainerContext } from "../../../widgets/cards";
import { selectFlipper } from "../models/slice/selectors";

export const Card = () => {
    const state = useSelector(selectFlipper);
    const dispath = useDispatch();
    const props = useCardsContainerContext();

    const clickHandle = () => {
        dispath(compareId(props.id));
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