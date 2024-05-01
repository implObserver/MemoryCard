import { useThisContext } from '../../../../../../widgets/cards/lib/context/Context'
import styles from '../style/Front.module.css'

export const Front = () => {
    const props = useThisContext();
    return (
        <div className={styles.front}>
            <img src={props.frontUrl} alt={''} />
        </div>
    )
}