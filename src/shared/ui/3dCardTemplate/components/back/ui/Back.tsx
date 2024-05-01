import { useThisContext } from '../../../../../../widgets/cards/lib/context/Context'
import styles from '../style/Back.module.css'

export const Back = () => {
    const props = useThisContext();
    return (
        <div className={styles.back}>
            <img src={props.backUrl} alt={''} />
        </div>
    )
}