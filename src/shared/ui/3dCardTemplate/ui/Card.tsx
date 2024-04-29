import { BackSide } from "../components/back"
import { FrontSide } from "../components/front"
import styles from '../style/Cube.module.css'

export const Card = (props: Card) => {
    return (
        <div className={styles.card}>
            <FrontSide props={props.front}></FrontSide>
            <BackSide props={props.back}></BackSide>
        </div>
    )
}