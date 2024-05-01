import { Description } from '../components/description'
import { Title } from '../components/title'
import styles from '../styles/Header.module.css'

export const Header = () => {
    return (
        <section className={styles.header}>
            <Title></Title>
            <Description></Description>
        </section>
    )
}