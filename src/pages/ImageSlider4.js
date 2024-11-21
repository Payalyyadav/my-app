import React, { useState } from "react";
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
  

import R1 from "../assets/R1.jpg"
import R2 from "../assets/R2.webp"
import R3 from "../assets/R3.jpg"
import R4 from "../assets/R4.webp"
import R5 from "../assets/R5.jpg"


import R6 from "../assets/R6.jpg"
import R7 from "../assets/R7.webp"
import R8 from "../assets/R8.webp"


const ImageSlider4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    { url: "https://thedecorkart.com/cdn/shop/files/009A0780.1_330x_crop_center.jpg?v=1726817425",
      text:"Lounge Ottoman - Dark Beige",price:"₹ 6,490.00" ,hoverUrl:R1
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0792_330x_crop_center.jpg?v=1726480251",
      text:"Luxe Ottoman - White",price:"₹ 6,490.00",hoverUrl:R2
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0786_330x_crop_center.jpg?v=1726480207",
      text:"Lounge Ottoman - Slate Grey",price:"₹ 6,490.00",hoverUrl:R3
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0781_1c6566b0-8d37-458a-8811-f4038af1ff73_330x_crop_center.jpg?v=1726480458",
      text:"Lounge Ottoman - Light Beige",price:"₹ 6,490.00",hoverUrl:R4
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0790_330x_crop_center.jpg?v=1726480226",
      text:"Lounge Ottoman - Sky Blue",price:"₹ 6,490.00",hoverUrl:R5
     },




     { url: "https://thedecorkart.com/cdn/shop/files/009A0781_1c6566b0-8d37-458a-8811-f4038af1ff73_330x_crop_center.jpg?v=1726480458",
      text:"Lounge Ottoman - Light Beige",price:"₹ 6,490.00",hoverUrl:R4
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0790_330x_crop_center.jpg?v=1726480226",
      text:"Lounge Ottoman - Sky Blue",price:"₹ 6,490.00",hoverUrl:R5
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0789_330x_crop_center.jpg?v=1726480276",
        text:"Lounge Ottoman - Beige",price:"₹ 6,490.00" ,hoverUrl:R6
      },
      { url: "https://thedecorkart.com/cdn/shop/files/009A6298_330x_crop_center.jpg?v=1692625712",
        text:"'Premium Coffee' Faux Leather Set of 3 Storage Stools",price:"₹ 14,500.00",hoverUrl:R7
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A6318_330x_crop_center.jpg?v=1692625330",
        text:"'Rugged Brown' Faux Leather Ottoman",price:"₹ 12,500.00",hoverUrl:R8
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
          
                <img
                  src={img.url}
                  alt={`slide-img-${index}`}
                  style={styles.image}
                  className="transition-opacity duration-500 group-hover:opacity-0"
                />
              
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
    marginTop: '1%',
  }}
>
  <img
    src="https://thedecorkart.com/cdn/shop/files/Home-Office-Tour---STACIE-FLINNER_1200x.jpg?v=1649256630"
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

  <Card
    sx={{
      position: 'absolute', 
      top: '27%', 
      left: '40%', 
      maxWidth: 520,
      // backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      boxShadow: 3, 
      paddingBottom:"32px"
    }}
  >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"
        sx={{marginLeft:'15px' ,marginTop:"30px"}}>
          WE WRITE REALLY GREAT EMAILS.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',marginLeft:'15px',marginTop:"20px" }}>
          No Spam. Only updates about new launches and sales. Directly to your inbox.
        </Typography>
        <TextField
          id="outlined-basic"
          label="Your e-mail"
          variant="outlined"
          sx={{ marginTop: '35px',marginLeft:'15px' ,width:"55%"}}
        />
        <Button className="grrr"
          variant="text"
          sx={{
            marginTop: '35px',
            backgroundColor: '#6c645a',
            color: 'white',
            height: '55px',
            width: '180px',
            marginLeft: '15px',

          }}
        >
          SUBSCRIBE
        </Button>
      </CardContent>
    </CardActionArea>
  </Card>
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





export default ImageSlider4;
