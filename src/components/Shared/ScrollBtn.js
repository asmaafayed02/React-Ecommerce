import React from 'react'
import { useEffect, useState } from "react";
const ScrollBtn = () => {
    const [showButton, setShowButton]= useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      })
    }
  return (
      <>
    {showButton && (
        <div className="row justify-content-end d-flex bg-dark">
        <button onClick={scrollToTop} className="btn btn-dark col-1 rounded-pill rounded mx-2 my-5 fixed-bottom ms-auto bd-highlight">
          <i className="fa fa-level-up "></i>
        </button>
        </div>
      )}
      </>
  )
}

export default ScrollBtn