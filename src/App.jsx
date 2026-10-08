import { useState }  from "react"
import { styles } from "/styles"

export default function App() {
  const [ burger, setBurger ] = useState(false)
  return (
    <>
    <header className={styles.app.header}>
      <h1 className={styles.app.h1}>Leeyam+</h1>

        <div className={styles.app.div1}>
          <a href="landing" className={styles.app.navBtn}>Dashboard</a>
          <a href="socmed" className={styles.app.navBtn}>Social Media</a>
          <a href="developments" className={styles.app.navBtn}>Developments</a>
          <a href="settings" className={styles.app.navBtn}>Settings</a>
        </div>


      <button className={styles.app.burger}>=</button>
      
    </header>
    
    </>
  )
}