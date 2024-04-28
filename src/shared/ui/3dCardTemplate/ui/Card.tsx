import { BackSide } from "../components/back"
import { FrontSide } from "../components/front"
import styles from '../style/Cube.module.css'

export const Card = () => {
    return (
        <div className={styles.card}>
            <FrontSide></FrontSide>
            <BackSide></BackSide>
        </div>
    )
}