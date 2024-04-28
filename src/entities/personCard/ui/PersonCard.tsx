import { useDispatch, useSelector } from "react-redux"
import { Card } from "../../../shared/ui/3dCardTemplate"
import { RootState } from "../../../app/Store"
import { check } from "../models/slice";
import styles from '../styles/PersonCard.module.css'

export const PersonCard = () => {
    const isCheck = useSelector((state: RootState) => state.card.value);
    const dispath = useDispatch();

    return (
        <div className={`${styles.person} ${isCheck ? styles.close : ''}`}
            onClick={() => dispath(check())}>
            <Card></Card>
        </div>
    )
}