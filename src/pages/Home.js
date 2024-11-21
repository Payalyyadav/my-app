import React, { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./Pages.css"
import Navbar from '../components/Navbar';
import Video from './Video';
import Main from './Main';
import ImageSlider from './ImageSlider';
import ImageSlider1 from './ImageSlider1';
import ImageSlider2 from './ImageSlider2';
import ImageSlider3 from './ImageSlider3';
import ImageSlider4 from './ImageSlider4';
import Footer from '../components/Footer';
import { FaLongArrowAltUp } from "react-icons/fa";


const Home = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsButtonVisible(scrollTop > 0); // Show the button only when scrolled down
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const text = [
    "A rare chance to save: Everything @ Half Price",
    "Festive Home Sale: Everything @ Flat 50% Off"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
  };

  const prevText = () => {
    setCurrentTextIndex((prevIndex) =>
      (prevIndex - 1 + text.length) % text.length
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextText, 5000);
    return () => clearInterval(intervalRef.current);
  }, [text.length]);

  return (
    <div>
      <Container maxWidth={false} className='bg-[#d9d4cc] pt-3 pb-3'>
        <Container maxWidth="sm" className='flex justify-between items-center'>
          <FaArrowLeft onClick={prevText} style={{ cursor: "pointer" }} />
          <span className='ff text-xs'>{text[currentTextIndex]}</span>
          <FaArrowRight onClick={nextText} style={{ cursor: "pointer" }} />
        </Container>
      </Container>
        <Navbar/>
        <Video/>
        <Main/>
        <ImageSlider/>
        <ImageSlider1/>
        <ImageSlider2/>
        <ImageSlider3/>
        <ImageSlider4/>
        <Footer/>
        {isButtonVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#d9d4cc] text-black p-3  shadow-lg "
        >
          <FaLongArrowAltUp />
        </button>
      )}
    </div>
  );
};

export default Home;
