import React, { useState } from "react";
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';

import a from "../assets/1.webp"
import b from "../assets/2.webp"
import c from "../assets/3.webp"
import d from "../assets/4.webp"
import e from "../assets/5.webp"
import f from "../assets/6.webp"
import g from "../assets/7.webp"
import h from "../assets/8.webp"
import i from "../assets/9.webp"
import j from "../assets/10.webp"
import k from "../assets/11.webp"
import l from "../assets/12.webp"
import m from "../assets/13.webp"
import n from "../assets/14.webp"
import o from "../assets/15.webp"
import p from "../assets/16.webp"
import q from "../assets/17.webp"
import r from "../assets/18.webp"
import s from "../assets/19.webp"
import t from "../assets/20.webp"
import u from "../assets/21.webp"
import v from "../assets/22.webp"
import w from "../assets/23.webp"
import x from "../assets/24.webp"
import y from "../assets/25.webp"
import z from "../assets/26.webp"
import A from "../assets/27.webp"
import B from "../assets/28.webp"
import C from "../assets/29.webp"
import D from "../assets/30.webp"
import E from "../assets/31.webp"
import F from "../assets/32.webp"
import G from "../assets/33.webp"
import H from "../assets/34.webp"
import I from "../assets/35.webp"
import J from "../assets/36.webp"
import K from "../assets/37.webp"
import L from "../assets/38.webp"
import M from "../assets/39.webp"
import N from "../assets/40.webp"
import O from "../assets/41.webp"
import P from "../assets/42.webp"
import Q from "../assets/43.webp"
import R from "../assets/44.webp"
import S from "../assets/45.webp"
import T from "../assets/46.webp"
import U from "../assets/47.webp"
import V from "../assets/48.webp"
import W from "../assets/49.webp"
import X from "../assets/50.webp"


const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    { url: "https://thedecorkart.com/cdn/shop/files/009A2952_330x_crop_center.jpg?v=1727345375",
      text:"Artisan Cowboy Riding Horse Statue",price:"₹ 5,800.00" ,hoverUrl:a
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A2653_330x_crop_center.jpg?v=1727345276",
      text:"Elephant Family Bond: A Symbol of Unity and Strength",price:"₹ 4,800.00",hoverUrl:b
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A2631_fc3f24f3-46fd-47fd-8e54-57b44e23f78d_330x_crop_center.jpg?v=1727346298",
      text:"Majestic Horse Figurine 'Fearless Ascent'",price:"₹ 5,800.00",hoverUrl:c
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A2630_8e2f8979-24e5-4e01-a859-f57dec084567_330x_crop_center.jpg?v=1727346268",
      text:"Majestic Horse Figurine 'Rising Spirit'",price:"₹ 5,800.00",hoverUrl:d
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A2622_11d642c8-7988-4a24-ba27-ce7f25fc012f_330x_crop_center.jpg?v=1727346216",
      text:"Artisan Cowboy Riding Horse Statue - II",price:"₹ 5,800.00",hoverUrl:e
     },


    
    { url: "https://thedecorkart.com/cdn/shop/files/009A2948_8733f656-98a4-44f7-bfe9-dd37613b47f7_330x_crop_center.jpg?v=1727346137",
       text:"Majestic Horse Figurine 'Fearless Freedom'",price:"₹ 12,800.00",hoverUrl:f
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5359_2f3416c7-7729-4ad4-a803-2defb5e53322_330x_crop_center.jpg?v=1731139169",
       text:"Vintage Hand-Painted Blue & White Elephant",price:"₹ 5,800.00",hoverUrl:g
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9888_330x_crop_center.jpg?v=1722514780",
       text:"Angelfish Glass Figurine",price:"₹ 3,460.00",hoverUrl:h
    
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A8712_330x_crop_center.jpg?v=1720873161",
        text:"Golden Decorative Penguin Figurine",price:"₹ 8,600.00",hoverUrl:i
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A8520_6f248da2-3ecc-4ca2-972d-6354597bad23_330x_crop_center.jpg?v=1720786826",
       text:"Golden Butterfly Figurine - Large",price:"₹ 3,800.00",hoverUrl:j
     },




     { url: "https://thedecorkart.com/cdn/shop/files/009A8520_6f248da2-3ecc-4ca2-972d-6354597bad23_330x_crop_center.jpg?v=1720786826",
      text:"Golden Butterfly Figurine - Small",price:"₹ 3,400.00",hoverUrl:k
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A8523_330x_crop_center.jpg?v=1720830143",
      text:"Majestic Golden Horse Head Figurine",price:"₹ 12,800.00",hoverUrl:l
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9889_0d9d4f98-2faa-4d65-af7e-077f425722ab_330x_crop_center.jpg?v=1722514780", 
      text:"Whale Tail Glass Figurine",price:"₹ 3,860.00",hoverUrl:m
       },
    { url: "https://thedecorkart.com/cdn/shop/files/009A6005_330x_crop_center.jpg?v=1719879782",
      text:"Purple Rooster Glass Figurine",price:"₹ 3,460.00",hoverUrl:n
       },
     {url:"https://thedecorkart.com/cdn/shop/files/009A9887_ef593ee3-bba3-4723-8931-8575d8633fa5_330x_crop_center.jpg?v=1722514780",
      text:"Hooked Rooster Glass Figurine - Blue",price:"₹ 1,930.00",hoverUrl:o},





    { url: "https://thedecorkart.com/cdn/shop/files/009A6032_330x.jpg?v=1721891306", 
      text:"Colorful Cat Glass Figurine - Small",price:"₹ 2,860.00",hoverUrl:p
    },
   { url: "https://thedecorkart.com/cdn/shop/files/009A9886_330x_crop_center.jpg?v=1722514780",
    text:"Venus Back Dog Glass Figurine",price:"₹ 4,860.00",hoverUrl:q
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9802_330x_crop_center.jpg?v=1721891315", 
      text:"Macaw Parrot Glass Figurine",price:"₹ 3,480.00",hoverUrl:r
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A4298_330x_crop_center.jpg?v=1722500930",
      text:"Pelican with an Open Beak Glass Figurine",price:"₹ 5,640.00",hoverUrl:s
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5793_330x_crop_center.jpg?v=1719922880",
      text:"Modern Abstract Animal Sculpture - Black",price:"₹ 6,400.00",hoverUrl:t
     },
    

    
    { url: "https://thedecorkart.com/cdn/shop/files/009A3398_330x_crop_center.jpg?v=1701502277",
      text:"'Regal Roar' A Majestic Lion Figurine - Small",price:"₹ 2,450.00",hoverUrl:u
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A3375_593ac481-9161-47b5-8198-e7d9c8893ec5_330x_crop_center.jpg?v=1701501003",
      text:"'Equine Elegance' Horse Figurine",price:"₹ 3,890.00",hoverUrl:v
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5679_fceabb52-507d-4be0-b954-e5cb91a9bf07_330x_crop_center.jpg?v=1702476716",
      text:"Mesmerizing Peacock Sculpture",price:"₹ 24,500.00",hoverUrl:w
     },
    { url: "https://thedecorkart.com/cdn/shop/files/IMG_0179_330x_crop_center.jpg?v=1699085413",
      text:"Unique Tray-Tailed Cat Figurine",price:"₹ 3,290.00",hoverUrl:x
     },
    { url: "https://thedecorkart.com/cdn/shop/files/IMG_0141_330x_crop_center.jpg?v=1699085568",
      text:"Impeccable Artistic Rooster Figurine",price:"₹ 3,580.00",hoverUrl:y
     },
   


    {url:"https://thedecorkart.com/cdn/shop/files/IMG_0148_a4b2c70f-1c12-44fa-891b-d5d053e4c272_330x_crop_center.jpg?v=1699100148",
      text:"Magnificent Golden Elephant Figurine",price:"₹ 1,568.00",hoverUrl:z
    },
    {url:"https://thedecorkart.com/cdn/shop/files/IMG_0166_90f1245b-9930-4608-a613-b1a2d5905a53_330x_crop_center.jpg?v=1699339346",
      text:"Folk Art Bird Figurine - Large",price:"₹ 1,330.00",hoverUrl:A
    },
    {url:"https://thedecorkart.com/cdn/shop/files/IMG_0168_330x_crop_center.jpg?v=1699339338",
      text:"Folk Art Bird Figurine - Small",price:"₹ 1,050.00",hoverUrl:B
    },
    {url:"https://thedecorkart.com/cdn/shop/files/IMG_0157_330x_crop_center.jpg?v=1699259258",
      text:"Mesmerizing Golden Cat Figurine",price:"₹ 1,990.00",hoverUrl:C
    },
    {url:"https://thedecorkart.com/cdn/shop/files/IMG_0163_8707172c-eadb-4ae5-949f-b607ae0c5a0c_330x_crop_center.jpg?v=1699091473",
      text:"Majestic Horse Figurines",price:"₹ 2,450.00",hoverUrl:D
    },

    

   { url: "https://thedecorkart.com/cdn/shop/files/009A5309_1bf816bf-9536-42d7-8f68-223b47e59f60_330x_crop_center.jpg?v=1702377149",
    text:"Playful Cat Tabletop Plush Toy",price:"₹ 1,250.00",hoverUrl:E
    },
    { url: "https://thedecorkart.com/cdn/shop/files/2T8A0164_330x_crop_center.jpg?v=1696055669", 
      text:"'Equine Nurturing' A Horse Feeding Figurine",price:"₹ 1,850.00",hoverUrl:F
    },
    { url: "https://thedecorkart.com/cdn/shop/files/2T8A9975_330x_crop_center.jpg?v=1701956255",
      text:"The Tray-Tailed Cat Figurine",price:"₹ 2,600.00",hoverUrl:G
     },
    { url: "https://thedecorkart.com/cdn/shop/files/2T8A0056_1_330x_crop_center.jpg?v=1704274934",
      text:"'Cock-a-Doodle Duo' The Rooster Family Figurine",price:"₹ 3,600.00",hoverUrl:H
     },
    { url: "https://thedecorkart.com/cdn/shop/files/2T8A0181_330x_crop_center.jpg?v=1696055395",
      text:"'Charming Trio' Adorable Rooster Figurine",price:"₹ 2,600.00",hoverUrl:I
     },
  


    { url: "https://thedecorkart.com/cdn/shop/files/IMG_9953_330x_crop_center.jpg?v=1696401204",
      text:"Playful Pup Tabletop Plush Toy",price:"₹ 1,250.00",hoverUrl:J
     },
    { url: "https://thedecorkart.com/cdn/shop/files/IMG_9970_d7737124-5e29-450a-b989-4dfa28f25a88_330x_crop_center.jpg?v=1696401270", 
      text:"Playful Pup Tabletop Plush Toy",price:"₹ 1,250.00",hoverUrl:K
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9492_3d327dba-a9e8-49da-be8d-3cd78e870de5_330x_crop_center.jpg?v=1695121382",
      text:"'Galloping Grace' Gold & Black Horse Figurine",price:"₹ 3,850.00",hoverUrl:L

     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9489_9ea8a649-915c-4031-ad20-2843ec07473b_330x_crop_center.jpg?v=1694438802",
      text:"'Galloping Grace' Gold & Black Horse Figurine",price:"₹ 3,850.00",hoverUrl:M
     },
    {url:"https://thedecorkart.com/cdn/shop/products/009A9524_069f498c-8ef5-40a8-aa77-84cec9c127a1_330x_crop_center.jpg?v=1702722710",
      text:"Black & Gold Elephant Figurine",price:"₹ 1,990.00",hoverUrl:N
    },




    { url: "https://thedecorkart.com/cdn/shop/files/009A5712_330x_crop_center.png?v=1692183551",
      text:"Majestic Guardian: Unveiling the Secrets of the Foo Dogs - White",price:"₹ 9,600.00"
     , hoverUrl:O},
    { url: "https://thedecorkart.com/cdn/shop/files/009A3999_330x_crop_center.jpg?v=1691243685",
      text:"Bulldog Bluetooth Speaker Statue - Pink",price:"₹ 16,500.00" , hoverUrl:P
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A3965_330x_crop_center.jpg?v=1691240831",
      text:"Royal Cockatoo Velvet Figurine - Pink",price:"₹ 8,850.00" , hoverUrl:Q
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A3996_330x_crop_center.jpg?v=1691235592",
      text:"Abstract Polygonal Geometric Leopard Figurine",price:"₹ 6,400.00" , hoverUrl:R
     },
    {url:"https://thedecorkart.com/cdn/shop/files/009A4235_330x_crop_center.jpg?v=1691244453",
      text:"Abstract Polygonal Geometric Leopard Figurine",price:"₹ 5,800.00" , hoverUrl:S
    },



    
    {url:"https://thedecorkart.com/cdn/shop/files/009A4235_330x_crop_center.jpg?v=1691244453",
      text:"Abstract Polygonal Geometric Leopard Figurine",price:"₹ 5,800.00" , hoverUrl:T
    },
    { url: "https://thedecorkart.com/cdn/shop/products/009A9745_88cb40e7-e611-4d4c-b756-60fd61c0605c_330x_crop_center.jpg?v=1655273522",
      text:"Sleeping Pup Tabletop Plush Toy",price:"Sale price₹ 1,250.00" , hoverUrl:U
     },
    { url: "https://thedecorkart.com/cdn/shop/products/DSC_1963_51a654e9-5f97-4fbc-92c7-7d20ae17730e_330x_crop_center.jpg?v=1614516371",
      text:"'Equus' Cast Iron Horse Figurine",price:"₹ 3,200.00" , hoverUrl:V
     },
    { url: "https://thedecorkart.com/cdn/shop/files/MG_8920_f090849b-78f9-4b95-a037-44b038fbfd98_500x_1705577603215_330x_crop_center.jpg?v=1705662469", 
      text:"'When Pig's Fly' Decorative Figurine",price:"₹ 1,150.00" , hoverUrl:W
    },
    {url: "https://thedecorkart.com/cdn/shop/files/009A4357_7d59269d-1155-4b36-8b2e-f0b5e8f734d2_330x_crop_center.jpg?v=1699530078",
      text:"'When Pig's Fly' Wall Mounted Figurine",price:"₹ 2,350.00",hoverUrl:X
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
                  Add to Cart
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
        src="https://thedecorkart.com/cdn/shop/files/Art_Born_of_Heritage_1349x.jpg?v=1731160526"
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





export default ImageSlider;
