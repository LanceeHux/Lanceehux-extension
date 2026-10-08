import { useState, useEffect }  from "react"
import { styles } from "./styles"

export default function App() {
  const [ burger, setBurger ] = useState(false)
  const [time, setTime] = useState('');

  const socmed = [
    { name: 'GitHub', img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', url: 'https://github.com' },
    { name: 'YouTube', img: 'https://www.youtube.com/s/desktop/f8de1209/img/favicon.ico', url: 'https://youtube.com' },
    { name: 'X / Twitter', img: 'https://abs.twimg.com/favicons/twitter.3.ico', url: 'https://twitter.com' },
    { name: 'Discord', img: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', url: 'https://discord.com' },
  ];

  useEffect(() => {
    const updateManilaTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format (00:00 - 23:59)
      });
      setTime(formattedTime);
    };

    updateManilaTime(); // Run immediately
    const interval = setInterval(updateManilaTime, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
    <header className={styles.app.header}>
      <h1 className={styles.app.h1}>Leeyam+</h1>

        <div className={styles.app.div1}>
          <a href="#landing" className={styles.app.navBtn}>Dashboard</a>
          <a href="#socmed" className={styles.app.navBtn}>Social Media</a>
          <a href="developments" className={styles.app.navBtn}>Developments</a>
          <a href="settings" className={styles.app.navBtn}>Settings</a>
        </div>
    </header>

    <main className={styles.app.main} id="landing">

      <div className={styles.app.circle}></div>

      <section className={styles.app.section}>
        <div className={styles.app.div2}>
          <h2 className={styles.app.h1b}>Hello there, Leeyam!</h2>
          <form className={styles.app.form} action="https://www.google.com/search" method="GET" target="_blank">
            <input className={styles.app.searchBar} type="text" name="q" placeholder="Search Google..." required />
          </form>
          <p className={styles.app.time}>{time}</p>
        </div>
        
      </section>
    </main>

    <main className={styles.app.main2} id="socmed">
      <section className={styles.app.section}>
        <div className={styles.app.div2}>
          <h2 className={styles.app.cache1}>Social Media you often visit.</h2>
          <div className={styles.app.appsGrid}>
            {socmed.map((app, index) => {
              return (
                <div key={index} className={styles.app.apps}>
                  <img className={styles.app.appsImg} src={app.img} alt={app.name} />
                  <span className={styles.app.appsName}>{app.name}</span>
                  <button 
                    className={styles.app.appsBtn} 
                    onClick={() => window.location.href = app.url}
                  >
                    Open
                  </button>
                </div>
              );
            })}
          </div>
          <code className={styles.app.cache2}>Manage through settings.</code>
        </div>
      </section>
    </main>
    </>
  )
}