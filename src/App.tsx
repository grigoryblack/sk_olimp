import {useEffect, useState} from "react";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import styles from "./App.module.scss"
import Loader from "./components/Lodader/Loader.tsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

  return (
      <div className={styles.main_wrapper}>
          {loading ? (
              <Loader/>
          ) : (
              <>
                  <Header/>
                  <AboutUs/>
                  <Services/>
                  <Portfolio/>
              </>
          )}
      </div>
  )
}

export default App
