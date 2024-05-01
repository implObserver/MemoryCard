import { Cards } from '../../../widgets/cards/ui/Cards'
import { Header } from '../../../widgets/header'
import { ScoreBoard } from '../../../widgets/scoreBoard'
import styles from '../styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <>
            <div className={styles.mainPage}>
                <Header></Header>
                <ScoreBoard></ScoreBoard>
                <Cards></Cards>
            </div>
        </>
    )
}