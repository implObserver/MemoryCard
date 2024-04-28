import { PersonCard } from '../entities/personCard';
import styles from './styles/App.module.css'

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <PersonCard></PersonCard>
      </div>
    </>
  )
}

export default App;