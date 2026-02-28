import { ArrowBigUp } from "lucide-react";
import style from "./style.module.css";
import React, { useState } from "react";

export default function ButtonUp() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    if (isScrolling) return;

    setIsScrolling(true);
    const scrollInterval = setInterval(() => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        clearInterval(scrollInterval);
        setIsScrolling(false);
      } else {
        window.scrollBy(0, -100); // Reduz 50px por iteração
      }
    }, 20); // Atualiza a cada 20ms
  };

  return (
    <div className={style.buttonUp}>
      <button
        onClick={scrollToTop} disabled={isScrolling}
      >
        <ArrowBigUp size={"30px"} color="#fff" />
      </button>
    </div>
  );
}
