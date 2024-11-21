import React, { useState } from "react";
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';

import L1 from "../assets/L1.webp"
import L2 from "../assets/L2.webp"
import L3 from "../assets/L3.webp"
import L4 from "../assets/L4.webp"
import L5 from "../assets/L5.webp"




const ImageSlider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    { url: "https://thedecorkart.com/cdn/shop/files/87_47d7d064-f089-4b49-9d5c-96a76e5fb8f5_330x_crop_center.jpg?v=1726469198",
      text:"modern Retractable Ceiling Fan + Chandelier Light (with Remote Control)",price:"₹ 16,687.50" ,hoverUrl:L1
    },
    { url: "https://thedecorkart.com/cdn/shop/files/82_5dd008c3-fd7b-47c2-8a12-c48e3665842e_330x_crop_center.jpg?v=1726468741",
      text:"modern Retractable Ceiling Fan + Chandelier Light (with Remote Control)",price:"₹ 16,800.00",hoverUrl:L2
     },
    { url: "https://thedecorkart.com/cdn/shop/files/77_893123d6-a1df-484c-b16e-a9964608f834_330x_crop_center.jpg?v=1726321498",
      text:"modern Retractable Ceiling Fan + Chandelier Light (with Remote Control)",price:"₹ 15,750.00",hoverUrl:L3
     },
    { url: "https://thedecorkart.com/cdn/shop/files/42_8e833400-c6df-42b2-819b-c7ec8a5a34d4_330x_crop_center.jpg?v=1722336349",
      text:"modern Retractable Ceiling Fan + Chandelier Light (with Remote Control)",price:"₹ 25,950.00",hoverUrl:L4
     },
    { url: "https://thedecorkart.com/cdn/shop/files/38_fc44be18-60ca-4d2f-b31d-32a9a54c6dc3_330x_crop_center.jpg?v=1722335947",
      text:"modern Retractable Ceiling Fan + Chandelier Light (with Remote Control)",price:"₹ 21,450.00",hoverUrl:L5
     },



    
];

  const imagesPerSlide = 5;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
<>
    
    <Container maxWidth={false}>
      <div style={styles.sliderContainer} className="mt-10">
        <button onClick={handlePrev} style={styles.arrow}>
          &#10094;
        </button>
        <div style={styles.slideWrapper}>
          <div
            style={{
              ...styles.slide,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} style={styles.imageContainer} className="group relative">
                {/* Default Image */}
                <img
                  src={img.url}
                  alt={`slide-img-${index}`}
                  style={styles.image}
                  className="transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={img.hoverUrl}
                  alt={`hover-img-${index}`}
                  className="absolute inset-0 w-full h-[48vh] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-3 rounded-[8px]"
                />
                <div className="text-center mt-5">
                  {img.text}
                  <br />
                  {img.price}
                </div>
                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-[120px] w-[96%]  bg-white text-black
                    py-4  transition-all duration-500 opacity-0 invisible 
                     group-hover:opacity-100 group-hover:visible
                      left-1/2 transform -translate-x-1/2 translate-y-8
                       group-hover:translate-y-0 "
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} style={styles.arrow}>
          &#10095;
        </button>
      </div>
    </Container>
   <Box
     sx={{
        position: 'relative',
        height: '590px',
        width: '100%',
        marginTop:'1%'
      }}
       >

      <img
        src="https://thedecorkart.com/cdn/shop/files/Inspired_Kitchens_1349x.jpg?v=1731160678"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, 
        }}
      />
  </Box>
    </>
    
  );
};

const styles = {
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
    position: "relative",
  },
  imageContainer: {
    flex: "1 0 20%",
    maxWidth: "20%",
    padding: "10px",
    boxSizing: "border-box",
    position: "relative",
  },
  slideWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  slide: {
    display: "flex",
    transition: "transform 0.5s ease",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  arrow: {
    cursor: "pointer",
    fontSize: "24px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#333",
  },
};





export default ImageSlider2;
