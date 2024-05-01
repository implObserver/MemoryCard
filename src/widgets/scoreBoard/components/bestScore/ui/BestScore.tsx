import { useSelector } from 'react-redux';
import styles from '../styles/BestScore.module.css'
import { RootState } from '../../../../../app/Store';

export const BestScore = () => {
    const score = useSelector((state: RootState) => state.score.best);
    console.log(score)

    return (
        <div className={styles.bestScore}>
            <span>Best Score: </span>
            <span>{score}</span>
        </div>
    )
}