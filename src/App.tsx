import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import styles from "./App.module.scss"

function App() {
  return (
      <div className={styles.main_wrapper}>
          <Header/>
          <AboutUs/>
          <Services/>
          <Portfolio/>
      </div>
  )
}

export default App
