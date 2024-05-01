import { MainPage } from '../pages/mainPage';
import styles from './styles/App.module.css'

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <MainPage></MainPage>
      </div>
    </>
  )
}

export default App;