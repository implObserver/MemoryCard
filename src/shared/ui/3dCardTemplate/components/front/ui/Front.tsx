import styles from '../style/Front.module.css'

export const Front = ({ props }) => {
    return (
        <div className={styles.front}>
            <img src={props.url} alt={props.alt} />
        </div>
    )
}

/*
style={{
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}}
*/