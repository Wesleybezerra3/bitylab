import { useState } from "react";
import style from "./app.module.css";
import logo from "../public/logo.svg";
import videoback from "./assets/video.mp4";

function App() {
  return (
    <>
      <main className={style.container}>
        <header className={style.menu}>
          <img src={logo} alt="" />
          <div className={style.links}>
            <a href="">
              <span>01.</span> sobre nós
            </a>
            <a href="">
              {" "}
              <span>02.</span> sobre nós
            </a>
            <a href="">
              {" "}
              <span>03.</span> sobre nós
            </a>
            <a href="">
              {" "}
              <span>04.</span> sobre nós
            </a>
            <a href="">
              {" "}
              <span>05.</span> sobre nós
            </a>
          </div>
        </header>
        <section className={style.content}>
          <div className={style.hero}>
            {/* <video autoPlay muted loop playsInline>
              <source src={videoback} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video> */}
            <div className={style.heroContent}>
              <p>
                Desenvolvimento Web sob medida <span>para negócios que querem crescer</span><span>.</span>
              </p>
            </div>
          </div>

          <section className={style.aboutus}> 
              Sobre mim
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
