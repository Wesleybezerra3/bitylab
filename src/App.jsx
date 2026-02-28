import { useEffect, useState } from "react";
import style from "./app.module.css";
import logo from "../src/assets/logoex.svg";
import videoback from "./assets/video.mp4";
import { MenuIcon } from "lucide-react";
import ButtonUp from "./components/ButtonUp";
import SideMenu from "./components/SideMenu";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <main className={style.container} >
        <ButtonUp/>
        <SideMenu isOpen={isMenuOpen}/>
        <header className={style.header}>
          <img src={logo} alt="" className={style.logo} />
            <button className={style.menuButton} onClick={()=>{
              setIsMenuOpen(prev => !prev)
            }}>
              <MenuIcon size={'30px'}/>
            </button>
          <div className={style.links}>
            <a href="#aboutus">
              <span>01.</span> sobre nós
            </a>
            <a href="#services">
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
          <div className={style.hero} id="hero">
            
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>Desenvolvimento Web Sob Medida</h1>
              <p className={style.heroSubtitle}>Para negócios que querem crescer.</p>
              <a href="#" className={style.ctaButton}>Saiba Mais</a>
            </div>
          </div>

          <section className={style.aboutus} id="aboutus">
            <div className={style.aboutusContainer} >
              <h2 className={style.sectionTitleAbout}>Sobre Nós</h2>
              <p className={style.sectionDescriptionAbout}>Transformamos ideias em soluções web inovadoras</p>
              
              <div className={style.aboutusContent}>
                <div className={style.aboutusText}>
                  <p>Somos uma equipe apaixonada por tecnologia e design, dedicada a criar soluções web personalizadas que elevam seus negócios.</p>
                  <p>Com uma abordagem consultiva, entendemos profundamente os desafios do seu negócio e entregamos soluções que geram resultados reais.</p>
                </div>
                
                <div className={style.servicesGrid} id="services">
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
              <h2 className={style.sectionTitleServices}>Nossos Serviços</h2>
              <p className={style.sectionDescriptionServices}>Soluções completas para seu negócio prosperar</p>
              
              <div className={style.servicesCardGrid}>
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>🎨</div>
                  <h3>Web Design</h3>
                  <p>Criamos interfaces modernas e intuitivas que refletem a identidade visual da sua marca.</p>
                  <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20informações%20sobre%20seus%20serviços" target="_blank" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>⚙️</div>
                  <h3>Sistemas Web</h3>
                  <p>Soluções personalizadas e escaláveis para otimizar seus processos e aumentar sua produtividade.</p>
                  <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20informações%20sobre%20seus%20serviços" target="_blank" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>📄</div>
                  <h3>Landing Pages</h3>
                  <p>Designs responsivos e otimizados para conversões eficientes e impactantes.</p>
                  <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20informações%20sobre%20seus%20serviços" target="_blank" className={style.ctaButtonSmall}>Saber Mais</a>
                </div>
                
                <div className={style.serviceCardLarge}>
                  <div className={style.serviceIconLarge}>🔧</div>
                  <h3>Suporte</h3>
                  <p>Assistência técnica especializada para manter seus sistemas funcionando perfeitamente.</p>
                  <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20informações%20sobre%20seus%20serviços" target="_blank" className={style.ctaButtonSmall}>Saber Mais</a>
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
