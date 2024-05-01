import { BestScore } from '../components/bestScore'
import { CurrentScore } from '../components/currentScore'
import styles from '../styles/ScoreBoard.module.css'

export const ScoreBoard = () => {
    return (
        <section className={styles.scoreBoard}>
            <BestScore></BestScore>
            <CurrentScore></CurrentScore>
        </section>
    )
}