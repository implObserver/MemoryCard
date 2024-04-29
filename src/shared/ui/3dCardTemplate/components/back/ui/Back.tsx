import styles from '../style/Back.module.css'

export const Back = ({ props }) => {
    return (
        <div className={styles.back}>
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