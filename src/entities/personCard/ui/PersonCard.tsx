import { Card } from "../../../shared/ui/3dCardTemplate"
import styles from '../styles/PersonCard.module.css'

export const PersonCard = () => {
    return (
        <div className={`${styles.person}`}>
            <Card></Card>
        </div>
    )
}