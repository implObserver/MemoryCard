import { ScoreCounter } from '../../../../../features/scoreCounter'
import styles from '../styles/CurrentScore.module.css'

export const CurrentScore = () => {
    return (
        <div className={styles.currentScore}>
            <span>Current Score: </span>
            <ScoreCounter></ScoreCounter>
        </div>
    )
}