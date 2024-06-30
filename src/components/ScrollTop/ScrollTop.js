import React from "react";
import "./ScrollTop.css";
import { useEffect, useState } from "react";
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    < >
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
          }}
          onClick={scrollUp}
          className="arrow"
        ></button>
      )}
    </>
  );
}

export default BackToTopButton;