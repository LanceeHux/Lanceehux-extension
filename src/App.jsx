import { useState, useEffect }  from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { styles } from "./styles"

 function Landing() {
  const [ burger, setBurger ] = useState(false)
  const [time, setTime] = useState('');

  const socmed = [
    { name: 'YouTube', img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23FF0000"/><polygon points="40,30 70,50 40,70" fill="white"/></svg>', url: 'https://youtube.com' },
    { name: 'X / Twitter', img: 'https://abs.twimg.com/favicons/twitter.3.ico', url: 'https://twitter.com' },
    { name: 'Discord', img: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', url: 'https://discord.com' },
    { name: 'Facebook', img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231877F2"/><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="75" fill="white">f</text></svg>', url: 'https://facebook.com'},
    { name: 'Instagram', img: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23fdf497"/><stop offset="5%" stop-color="%23fdf497"/><stop offset="45%" stop-color="%23fd5949"/><stop offset="60%" stop-color="%23d6249f"/><stop offset="100%" stop-color="%23285AEB"/></linearGradient></defs><rect width="100" height="100" rx="24" fill="url(%23ig)"/><path d="M50 31.5C40.3 31.5 32.5 39.3 32.5 49s7.8 17.5 17.5 17.5S67.5 58.7 67.5 49 59.7 31.5 50 31.5zm0 29.2c-6.5 0-11.7-5.2-11.7-11.7S43.5 37.3 50 37.3s11.7 5.2 11.7 11.7-5.2 11.7-11.7 11.7z" fill="white"/><circle cx="70.5" cy="29.5" r="4.2" fill="white"/><rect x="23" y="23" width="54" height="54" rx="16" fill="none" stroke="white" stroke-width="6"/></svg>', url: 'https://instagram.com' }
  ];

  const developments = [
    { name: 'GitHub', img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', url: 'https://github.com' },
    { name: 'Stackblitz', img: '/images/socmed/stackblitz.jpeg', url: 'https://stackblitz.com/' },
    { name: 'OneCompiler', img: 'https://onecompiler.com/favicon.ico', url: 'https://onecompiler.com' },
    { name: 'Gemini', img: '/images/socmed/gemini.jpeg', url: 'https://gemini.google.com/' },
  ]

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
        </div>
      </section>
    </main>
    <main className={styles.app.main2} id="developments">
      <section className={styles.app.section}>
        <div className={styles.app.div2}>
          <h2 className={styles.app.cache1}>Sites for Programming.</h2>
          <div className={styles.app.appsGrid}>
            {developments.map((app, index) => {
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
        </div>
      </section>
    </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
    <header className={styles.app.header}>
      <h1 className={styles.app.h1}>Leeyam+</h1>

        <div className={styles.app.div1}>
          <Link to="/" className={styles.app.navBtn}>Dashboard</Link>
          <a href="#socmed" className={styles.app.navBtn}>Social Media</a>
          <a href="#developments" className={styles.app.navBtn}>Developments</a>
        </div>

        <button className={styles.app.cache3}>=</button>
    </header>

    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  )
}