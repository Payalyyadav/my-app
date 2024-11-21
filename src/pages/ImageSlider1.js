import React, { useState } from "react";
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';

import aa from "../assets/aa.webp"
import bb from "../assets/bb.webp"
import cc from "../assets/cc.webp"
import dd from "../assets/dd.webp"
import ee from "../assets/ee.webp"
import ff from "../assets/ff.webp"
import gg from "../assets/gg.webp"
import hh from "../assets/hh.webp"
import ii from "../assets/ii.webp"
import jj from "../assets/jj.webp"
import kk from "../assets/kk.webp"
import ll from "../assets/ll.webp"
import mm from "../assets/mm.webp"
import nn from "../assets/nn.webp"
import oo from "../assets/oo.webp"
import pp from "../assets/pp.webp"
import qq from "../assets/qq.webp"
import rr from "../assets/rr.webp"
import ss from "../assets/ss.webp"
import tt from "../assets/tt.webp"
import uu from "../assets/uu.webp"
import vv from "../assets/vv.webp"
import ww from "../assets/ww.webp"
import xx from "../assets/xx.webp"
import yy from "../assets/yy.webp"

import aaa from "../assets/aaa.webp"
import bbb from "../assets/bbb.webp"
import ccc from "../assets/ccc.webp"
import ddd from "../assets/ddd.webp"
import eee from "../assets/eee.webp"
import fff from "../assets/fff.webp"
import ggg from "../assets/ggg.webp"
import hhh from "../assets/hhh.webp"
import iii from "../assets/iii.webp"
import jjj from "../assets/jjj.webp"
import kkk from "../assets/kkk.webp"


const ImageSlider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    { url: "https://thedecorkart.com/cdn/shop/files/009A5400_910757e1-d27f-4b72-8950-1e67e392110d_330x_crop_center.jpg?v=1731140539",
      text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 2,860.00" ,hoverUrl:aa
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5369_109334b0-95be-4f88-ba68-1a1d01ccc4f3_330x_crop_center.jpg?v=1731139162",
      text:"Classic Blue & White Teapot",price:"₹ 3,200.00",hoverUrl:bb
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5355_05fae987-082b-40c6-bdad-29a864ba6b3b_330x_crop_center.jpg?v=1731139150",
      text:"Blue and White Hand-Shaped Flower Vase",price:"₹ 5,400.00",hoverUrl:cc
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5359_2f3416c7-7729-4ad4-a803-2defb5e53322_330x_crop_center.jpg?v=1731139169",
      text:"Vintage Hand-Painted Blue & White Elephant",price:"₹ 5,800.00",hoverUrl:dd
     },
    { url: "https://thedecorkart.com/cdn/shop/files/2_2eddc54b-c26d-4d0a-8fd9-5b36b5d37c2a_330x_crop_center.jpg?v=1731308919",
      text:"Elegant Blue and White Vase",price:"₹ 5,600.00",hoverUrl:ee
     },



    
    { url: "https://thedecorkart.com/cdn/shop/files/009A5406_c18029dc-deb3-4f02-9cd2-a813364c3f10_330x_crop_center.jpg?v=1731139319",
       text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 2,860.00",hoverUrl:ff
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5367_91f4ae7a-46a0-4adf-b1b1-0c6076ff76c2_330x_crop_center.jpg?v=1731139358",
       text:"Rendezvous with Blue and White Kettleale",price:"₹ 3,460.00",hoverUrl:gg
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5403_380a77d5-9c2f-4f19-9a75-8ca15ab80927_330x_crop_center.jpg?v=1731140564",
       text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 2,860.00",hoverUrl:hh
    
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7275_07878b9a-824e-46d5-908f-96dbb385ef59_330x_crop_center.jpg?v=1719829096",
        text:"Chinoiserie Decorative Easter Egg",price:"₹ 750.00",hoverUrl:ii
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7280_8565be44-e4bd-443b-b8eb-9129ab3c3c47_330x_crop_center.jpg?v=1719828155",
       text:"Chinoiserie Decorative Easter Egg",price:"₹ 750.00",hoverUrl:jj
     },




     { url: "https://thedecorkart.com/cdn/shop/files/009A7284_82f8ed4d-3ed4-4154-94df-d27214908bf0_330x_crop_center.jpg?v=1719828125",
      text:"Chinoiserie Decorative Easter Egg",price:"₹ 750.00",hoverUrl:kk
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7283_330x_crop_center.jpg?v=1719828086",
      text:"Chinoiserie Decorative Easter Egg",price:"₹ 750.00",hoverUrl:ll
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7254_8bfdec43-f79a-4b8c-824c-b8c2ebd58646_330x_crop_center.jpg?v=1719828779", 
      text:"Chinoiserie Decorative Ball - Set of 2",price:"₹ 950.00",hoverUrl:mm
       },
    { url: "https://thedecorkart.com/cdn/shop/files/009A6170_330x_crop_center.jpg?v=1719793392",
      text:"Chinoiserie Decorative Ball - Set of 2",price:"₹ 950.00",hoverUrl:nn
       },
     {url:"https://thedecorkart.com/cdn/shop/files/009A7264_5dbb95d0-bdc4-4eb7-ac96-f2282175371e_330x_crop_center.jpg?v=1719827290",
      text:"Chinoiserie Decorative Ball",price:"₹ 1,150.00",hoverUrl:oo},





    { url: "https://thedecorkart.com/cdn/shop/files/009A6967_330x.jpg?v=1719836456", 
      text:"Oversized Classic Blue & White Temple Jar",price:"₹ 22,500.00",hoverUrl:pp
    },
   { url: "https://thedecorkart.com/cdn/shop/files/009A7285_330x_crop_center.jpg?v=1719826898",
    text:"Chinoiserie Decorative Easter Egg",price:"₹ 750.00",hoverUrl:qq
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A6171_330x_crop_center.jpg?v=1719793391", 
      text:"Chinoiserie Decorative Ball",price:"₹ 950.00",hoverUrl:rr
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7180.1_330x.jpg?v=1707479152",
      text:"Chinoiserie Decorative Ball: Style 2 - Small",price:"₹ 590.00",hoverUrl:ss
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0660_6ef92147-9079-4bef-be80-eb0980d4b0d1_330x_crop_center.jpg?v=1725969531",
      text:"Rendezvous with Blue Vintage Ceramic Pitcher - Small",price:"₹ 3,860.00",hoverUrl:tt
     },
    

    
    { url: "https://thedecorkart.com/cdn/shop/files/009A0436_112789cf-4fcf-4a7f-98fb-cd05eaa0a594_330x_crop_center.jpg?v=1695472779",
      text:"Orchid Blue & White Serving Bowls",price:"₹ 650.00",hoverUrl:uu
     },
    { url: "https://thedecorkart.com/cdn/shop/files/88_ced913b7-fadb-4afd-8458-5c2c86445a45_330x.jpg?v=1687948476",
      text:"Decadent - Blue & White Temple Jar - Small",price:"₹ 14,500.00",hoverUrl:vv
     },
    { url: "https://thedecorkart.com/cdn/shop/products/009A6667_fe17b723-365a-4629-85da-da1cdab0799b_330x_crop_center.jpg?v=1691587144",
      text:"Decadent - Blue & White Porcelain Vase",price:"₹ 16,500.00",hoverUrl:ww
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5372_91d0ca4b-6552-4dc2-866c-6cbf73d3d090_330x_crop_center.jpg?v=1731140246",
      text:"Classic Blue & White Teapot",price:"₹ 3,860.00",hoverUrl:xx
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5373_a4d72d73-91d4-42be-b484-e463036981a0_330x_crop_center.jpg?v=1731140235",
      text:"Classic Blue & White Teapot",price:"₹ 3,860.00",hoverUrl:yy
     },
   



    {url:"https://thedecorkart.com/cdn/shop/files/009A5417_96e5a9ba-9d6f-49d6-800c-331a3f937571_330x_crop_center.jpg?v=1731140192",
      text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 3,260.00",hoverUrl:aaa
    },
    {url:"https://thedecorkart.com/cdn/shop/products/009A7841_330x_crop_center.jpg?v=1646641752",
      text:"Rendezvous with Blue Moon Vase",price:"₹ 4,860.00",hoverUrl:bbb
    },
    {url:"https://thedecorkart.com/cdn/shop/files/009A5419_330x_crop_center.jpg?v=1731140126",
      text:"Rendezvous with Blue - Wall Mounted Planter Kettle - Small",price:"₹ 3,260.00",hoverUrl:ccc
    },
    {url:"https://thedecorkart.com/cdn/shop/files/DSC_1303_abaa90fc-4ae2-45d7-ae92-5ca104e1ad71_330x_crop_center.jpg?v=1707917667",
      text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 3,260.00",hoverUrl:ddd
    },
    {url:"https://thedecorkart.com/cdn/shop/files/DSC_1301_f4d65e23-72c7-43ff-a0d8-af3f2b732371_330x_crop_center.jpg?v=1707917320",
      text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 3,260.00",hoverUrl:eee
    },

    

   { url: "https://thedecorkart.com/cdn/shop/files/27_1b7a4065-d6b0-4cab-9eba-4b8d107968e7_330x_crop_center.jpg?v=1725263313",
    text:"Rendezvous with Blue - Wall Mounted Planter Kettle",price:"₹ 3,260.00",hoverUrl:fff
    },
    { url: "https://thedecorkart.com/cdn/shop/files/DSC_9246_330x_crop_center.jpg?v=1702367183", 
      text:"'Chinoiserie Dinner Plate",price:"₹ 2,400.00",hoverUrl:ggg
    },
    { url: "https://thedecorkart.com/cdn/shop/files/DSC_9245_330x_crop_center.jpg?v=1702367201",
      text:"Chinoiserie Dinner Plate",price:"₹ 2,400.00",hoverUrl:hhh
     },
    { url: "https://thedecorkart.com/cdn/shop/files/DSC_9244_330x_crop_center.jpg?v=1702367215",
      text:"Chinoiserie Dinner Plate",price:"₹ 2,400.00",hoverUrl:iii
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A0668_b8f7c52a-4add-4ba0-a03f-a056721c3351_330x_crop_center.jpg?v=1695289786",
      text:"Rendezvous with Hand Painted Blue - Traditional Ceramic Pitcher",price:"Sale price₹ 4,460.00",hoverUrl:jjj
     },
  
    { url: "https://thedecorkart.com/cdn/shop/files/DSC_4529_330x_crop_center.jpg?v=1724845793",
      text:"Chinoiserie Dinner Plate",price:"₹ 1,600.00",hoverUrl:kkk
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
        src="https://thedecorkart.com/cdn/shop/files/Fan_Light_10633888-9ebd-4e44-b3db-ac42ab0d57c9_1349x.jpg?v=1731330361"
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





export default ImageSlider1;
