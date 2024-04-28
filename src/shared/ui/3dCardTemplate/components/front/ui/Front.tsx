import styles from '../style/Front.module.css'

export const Front = () => {
    return (
        <div className={styles.front}
            style={{
                backgroundImage: `url(https://images.vector-images.com/clipart/xl/181/10_clubs.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}></div>
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