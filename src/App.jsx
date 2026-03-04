import { useEffect, useState } from "react";
import style from "./app.module.css";
import logo from "../src/assets/logoex.svg";
import whatsapp from "../src/assets/WhatsApp.svg";
import instagram from "../src/assets/Instagram.svg";


import videoback from "./assets/video.mp4";
import { Instagram, MenuIcon } from "lucide-react";
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
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
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
            {/* <a href="#projects">
              {" "}
              <span>03.</span> Projetos
            </a> */}
            {/* <a href="#testimonials">
              {" "}
              <span>04.</span> Depoimentos
            </a> */}
            <a href="#contact">
              {" "}
              <span>03.</span> Contato
            </a>
          </div>
        </header>
        <section className={style.content}>
          <div className={style.hero} id="hero">
            
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>Desenvolvimento Web Sob Medida</h1>
              <p className={style.heroSubtitle}>Para negócios que querem crescer.</p>
              <a href="https://wa.me/5581985973850" className={style.ctaButton} target="_blank" rel="noopener noreferrer">Saiba Mais</a>
            </div>
          </div>

          <section className={style.aboutus} id="aboutus">
            <div className={style.aboutusContainer} >
              <h2 className={style.sectionTitleAbout}>Sobre Nós</h2>
              <p className={style.sectionDescriptionAbout}>Transformamos ideias em soluções web inovadoras</p>
              
              <div className={style.aboutusContent}>
                <div className={style.aboutusText}>
                  <p>A BityLab nasceu com o propósito de desenvolver sites, landing pages e sistemas web sob medida, criados por especialistas apaixonados por tecnologia. Nosso foco é ajudar pequenos negócios a vender mais, fortalecer sua presença digital e se posicionar de forma profissional no mercado.</p>
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

          {/* <section className={style.projects} id="projects">
            <div className={style.projectsContainer}>
              <h2 className={style.sectionTitleProjects}>Nossos Projetos</h2>
              <p className={style.sectionDescriptionProjects}>Confira alguns dos trabalhos que realizamos para nossos clientes</p>
              
              <div className={style.projectsGrid}>
                <div className={style.projectCard}>
                  <div className={style.projectImage}>
                    <div className={style.projectImagePlaceholder}>🌐</div>
                  </div>
                  <div className={style.projectContent}>
                    <h3>E-commerce Moderno</h3>
                    <p>Plataforma de vendas online com integração de pagamento e gestão de inventário.</p>
                    <div className={style.projectTags}>
                      <span className={style.tag}>React</span>
                      <span className={style.tag}>Node.js</span>
                      <span className={style.tag}>MongoDB</span>
                    </div>
                    <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20saber%20mais%20sobre%20este%20projeto" target="_blank" className={style.ctaButtonSmall}>Ver Caso</a>
                  </div>
                </div>

                <div className={style.projectCard}>
                  <div className={style.projectImage}>
                    <div className={style.projectImagePlaceholder}>📱</div>
                  </div>
                  <div className={style.projectContent}>
                    <h3>App de Produtividade</h3>
                    <p>Aplicação web para gerenciamento de tarefas com colaboração em tempo real.</p>
                    <div className={style.projectTags}>
                      <span className={style.tag}>React</span>
                      <span className={style.tag}>Firebase</span>
                      <span className={style.tag}>Tailwind</span>
                    </div>
                    <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20saber%20mais%20sobre%20este%20projeto" target="_blank" className={style.ctaButtonSmall}>Ver Caso</a>
                  </div>
                </div>

                <div className={style.projectCard}>
                  <div className={style.projectImage}>
                    <div className={style.projectImagePlaceholder}>🎯</div>
                  </div>
                  <div className={style.projectContent}>
                    <h3>Dashboard Executivo</h3>
                    <p>Sistema de análise de dados com visualizações interativas e relatórios customizados.</p>
                    <div className={style.projectTags}>
                      <span className={style.tag}>Vue.js</span>
                      <span className={style.tag}>Python</span>
                      <span className={style.tag}>PostgreSQL</span>
                    </div>
                    <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20saber%20mais%20sobre%20este%20projeto" target="_blank" className={style.ctaButtonSmall}>Ver Caso</a>
                  </div>
                </div>

                <div className={style.projectCard}>
                  <div className={style.projectImage}>
                    <div className={style.projectImagePlaceholder}>🚀</div>
                  </div>
                  <div className={style.projectContent}>
                    <h3>Plataforma de Educação</h3>
                    <p>LMS completo com cursos, avaliações e gamificação para melhor engajamento.</p>
                    <div className={style.projectTags}>
                      <span className={style.tag}>Next.js</span>
                      <span className={style.tag}>GraphQL</span>
                      <span className={style.tag}>AWS</span>
                    </div>
                    <a href="https://wa.me/5581985973850?text=Olá%0AGostaria%20de%20saber%20mais%20sobre%20este%20projeto" target="_blank" className={style.ctaButtonSmall}>Ver Caso</a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className={style.testimonials} id="testimonials">
            <div className={style.testimonialsContainer}>
              <h2 className={style.sectionTitleTestimonials}>O Que Nossos Clientes Dizem</h2>
              <p className={style.sectionDescriptionTestimonials}>Histórias de sucesso de quem confiou em nossos serviços</p>
              
              <div className={style.testimonialsGrid}>
                <div className={style.testimonialCard}>
                  <div className={style.testimonialRating}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className={style.testimonialText}>"A Bitylab transformou completamente nossa presença online. O site ficou moderno, rápido e nossas vendas aumentaram 300% em três meses!"</p>
                  <div className={style.testimonialAuthor}>
                    <div className={style.authorAvatar}>👨‍💼</div>
                    <div className={style.authorInfo}>
                      <h4>Carlos Silva</h4>
                      <p>CEO, Empresa XYZ</p>
                    </div>
                  </div>
                </div>

                <div className={style.testimonialCard}>
                  <div className={style.testimonialRating}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className={style.testimonialText}>"Profissionais incríveis! Superaram minhas expectativas com o sistema de gestão. O suporte é impecável e sempre disponível."</p>
                  <div className={style.testimonialAuthor}>
                    <div className={style.authorAvatar}>👩‍💼</div>
                    <div className={style.authorInfo}>
                      <h4>Marina Costa</h4>
                      <p>Diretora Financeira, Tech Solutions</p>
                    </div>
                  </div>
                </div>

                <div className={style.testimonialCard}>
                  <div className={style.testimonialRating}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className={style.testimonialText}>"Do primeiro contato até a entrega, tudo foi perfeito. Entregaram antes do prazo e os resultados superaram o esperado. Recomendo!"</p>
                  <div className={style.testimonialAuthor}>
                    <div className={style.authorAvatar}>👨‍🎓</div>
                    <div className={style.authorInfo}>
                      <h4>João Oliveira</h4>
                      <p>Founder, StartupAI</p>
                    </div>
                  </div>
                </div>

                <div className={style.testimonialCard}>
                  <div className={style.testimonialRating}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className={style.testimonialText}>"A equipe é muito atenciosa e entende perfeitamente o que você precisa. Nossa landing page converteu mais leads que planejávamos!"</p>
                  <div className={style.testimonialAuthor}>
                    <div className={style.authorAvatar}>👩‍🔬</div>
                    <div className={style.authorInfo}>
                      <h4>Fernanda Martins</h4>
                      <p>Marketing Manager, Inovação +</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className={style.contact} id="contact">
            <div className={style.contactContainer}>
              <h2 className={style.sectionTitleContact}>Vamos Trabalhar Juntos!</h2>
              <p className={style.sectionDescriptionContact}>Tem um projeto em mente? Entre em contato conosco e vamos transformar suas ideias em realidade.</p>
              
              <div className={style.contactContent}>
                <div className={style.infoCard}>
                  <div className={style.infoIcon}>📞</div>
                  <h3>Telefone</h3>
                  <p><a href="tel:+5581985973850">(81) 9 8597-3850</a></p>
                </div>

                <div className={style.infoCard}>
                  <div className={style.infoIcon}>📧</div>
                  <h3>Email</h3>
                  <p><a href="mailto:contato@bitylab.com">contato@bitylab.com</a></p>
                </div>
              </div>

              <div className={style.socialLinksContact}>
                <h4>Acompanhe-nos</h4>
                <div className={style.socialButtonsContact}>
                  <a href="https://wa.me/5581985973850" target="_blank" rel="noopener noreferrer" className={style.socialButtonContact}>WhatsApp</a>
                  <a href="https://instagram.com/bitylab" target="_blank" rel="noopener noreferrer" className={style.socialButtonContact}>Instagram</a>
                </div>
              </div>
            </div>
          </section>
           <footer className={style.footer}>
          <div className={style.footerContent}>
            <div className={style.footerSection}>
              <div className={style.footerBrand}>
                <div>
                  <img src={logo} alt="Bitylab Logo" className={style.footerLogo} />
                </div>
                <p>Transformando ideias em soluções web inovadoras para negócios que querem crescer.</p>
              </div>
            </div>

            <div className={style.footerSection}>
              <h4>Navegação</h4>
              <ul className={style.footerLinks}>
                <li><a href="#hero">Início</a></li>
                <li><a href="#aboutus">Sobre Nós</a></li>
                <li><a href="#services">Serviços</a></li>
                {/* <li><a href="#projects">Projetos</a></li> */}
              </ul>
            </div>

            <div className={style.footerSection}>
              <h4>Mais</h4>
              <ul className={style.footerLinks}>
                {/* <li><a href="#testimonials">Depoimentos</a></li> */}
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            <div className={style.footerSection}>
              <h4>Contatos</h4>
              <div className={style.footerSocial}>
                <a href="https://wa.me/5581985973850" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                  <img src={whatsapp} alt="WhatsApp" />
                </a>
                <a href="https://www.instagram.com/bitylab" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                  <img src={instagram} alt="Instagram" />
                </a>
                {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                  <span>💼</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                  <span>🔧</span>
                </a> */}
              </div>
            </div>
          </div>

          <div className={style.footerBottom}>
            <p>&copy; 2026 Bitylab. Todos os direitos reservados.</p>
            <p>Desenvolvido com <span>❤️</span> por Bitylab</p>
          </div>
        </footer>
        </section>

      </main>
    </>
  );
}

export default App;
