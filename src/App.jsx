import { useState } from "react";
import style from "./app.module.css";
import logo from "../public/logo.svg";
import videoback from "./assets/video.mp4";
import { MenuIcon } from "lucide-react";


function App() {
  return (
    <>
      <main className={style.container}>
        <header className={style.header}>
          <img src={logo} alt="" />
          <div>

          </div>
            <button className={style.menuButton}>
              <MenuIcon size={'30px'}/>
            </button>
          <div className={style.links}>
            <a href="">
              <span>01.</span> sobre nós
            </a>
            <a href="">
              {" "}
              <span>02.</span> O que construimos
            </a>
            <a href="">
              {" "}
              <span>03.</span> Projetos
            </a>
            <a href="">
              {" "}
              <span>04.</span> Depoimentos
            </a>
            <a href="">
              {" "}
              <span>05.</span> Contato
            </a>
          </div>
        </header>
        <section className={style.content}>
          <div className={style.hero}>
            
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>Desenvolvimento Web Sob Medida</h1>
              <p className={style.heroSubtitle}>Para negócios que querem crescer.</p>
              <a href="#" className={style.ctaButton}>Saiba Mais</a>
            </div>
          </div>

          <section className={style.aboutus}>
            <div className={style.aboutusContainer}>
              <h2 className={style.sectionTitle}>Sobre Nós</h2>
              <p className={style.sectionDescription}>Transformamos ideias em soluções web inovadoras</p>
              
              <div className={style.aboutusContent}>
                <div className={style.aboutusText}>
                  <p>Somos uma equipe apaixonada por tecnologia e design, dedicada a criar soluções web personalizadas que elevam seus negócios.</p>
                  <p>Com uma abordagem consultiva, entendemos profundamente os desafios do seu negócio e entregamos soluções que geram resultados reais.</p>
                </div>
                
                <div className={style.servicesGrid}>
                  <div className={style.serviceCard}>
                    <div className={style.serviceIcon}>💻</div>
                    <h3>Design Moderno</h3>
                    <p>Interfaces intuitivas e atraentes que cativam seus usuários.</p>
                  </div>
                  <div className={style.serviceCard}>
                    <div className={style.serviceIcon}>⚡</div>
                    <h3>Desenvolvimento Rápido</h3>
                    <p>Soluções otimizadas e performáticas para melhor experiência.</p>
                  </div>
                  <div className={style.serviceCard}>
                    <div className={style.serviceIcon}>🔒</div>
                    <h3>Segurança Total</h3>
                    <p>Proteção completa dos seus dados e informações.</p>
                  </div>
                </div>
              </div>
              
              <a href="#" className={style.ctaButton}>Vamos Conversar</a>
            </div>
          </section>

          <section className={style.services}>
            <div className={style.servicesContainer}>
              <h2 className={style.sectionTitle}>Nossos Serviços</h2>
              <p className={style.sectionDescription}>Soluções completas para seu negócio prosperar</p>
              
              <div className={style.servicesCardGrid}>
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>🎨</div>
                  <h3>Web Design</h3>
                  <p>Criamos interfaces modernas e intuitivas que refletem a identidade visual da sua marca.</p>
                  <a href="#" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>⚙️</div>
                  <h3>Desenvolvimento Full Stack</h3>
                  <p>Front-end e back-end robustos, escaláveis e performáticos para suas aplicações.</p>
                  <a href="#" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>📱</div>
                  <h3>Aplicações Mobile</h3>
                  <p>Apps nativos e cross-platform que funcionam perfeitamente em qualquer dispositivo.</p>
                  <a href="#" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>🚀</div>
                  <h3>Otimização e Deployment</h3>
                  <p>Garantimos a melhor performance e disponibilidade da sua aplicação em produção.</p>
                  <a href="#" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
