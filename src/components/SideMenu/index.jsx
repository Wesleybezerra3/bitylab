import style from './style.module.css'
import React from 'react'

export default function SideMenu({ isOpen, onClose }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div 
        className={`${style.overlay} ${isOpen ? style.active : ''}`}
        onClick={handleOverlayClick}
      />
      <div className={`${style.sideMenu} ${isOpen ? style.active : ''}`}>
        <nav className={style.nav}>
          <a href="#hero" onClick={handleLinkClick} className={style.menuLink}>
            Início
          </a>
          <a href="#aboutus" onClick={handleLinkClick} className={style.menuLink}>
            <span>01.</span> Sobre Nós
          </a>
          <a href="#services" onClick={handleLinkClick} className={style.menuLink}>
            <span>02.</span> O que construímos
          </a>
          <a href="#projects" onClick={handleLinkClick} className={style.menuLink}>
            <span>03.</span> Projetos
          </a>
          <a href="#testimonials" onClick={handleLinkClick} className={style.menuLink}>
            <span>04.</span> Depoimentos
          </a>
          <a href="#contact" onClick={handleLinkClick} className={style.menuLink}>
            <span>05.</span> Contato
          </a>
        </nav>
      </div>
    </>
  )
}
