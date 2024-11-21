import React, { useState } from "react";
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';

import aaaa from "../assets/aaaa.webp"
import bbbb from "../assets/bbbb.webp"
import cccc from "../assets/cccc.webp"
import dddd from "../assets/dddd.webp"
import eeee from "../assets/eeee.webp"
import ffff from "../assets/ffff.webp"
import gggg from "../assets/gggg.webp"
import hhhh from "../assets/hhhh.webp"
import iiii from "../assets/iiii.webp"
import jjjj from "../assets/jjjj.webp"
import kkkk from "../assets/kkkk.webp"
import llll from "../assets/llll.webp"
import mmmm from "../assets/mmmm.webp"
import nnnn from "../assets/nnnn.webp"
import oooo from "../assets/oooo.webp"
import pppp from "../assets/pppp.webp"
import qqqq from "../assets/qqqq.webp"
import rrrr from "../assets/rrrr.webp"
import ssss from "../assets/ssss.webp"
import tttt from "../assets/tttt.webp"
import uuuu from "../assets/uuuu.webp"
import vvvv from "../assets/vvvv.webp"
import wwww from "../assets/wwww.webp"
import xxxx from "../assets/xxxx.webp"
import yyyy from "../assets/yyyy.webp"

import zzzz from "../assets/zzzz.webp"
import aaaaa from "../assets/aaaaa.webp"
import bbbbb from "../assets/bbbbb.webp"
import ccccc from "../assets/ccccc.webp"
import ddddd from "../assets/ddddd.webp"
import eeeee from "../assets/eeeee.webp"
import fffff from "../assets/fffff.webp"
import ggggg from "../assets/ggggg.webp"
import hhhhh from "../assets/hhhhh.webp"
import iiiii from "../assets/iiiii.webp"
import jjjjj from "../assets/jjjjj.webp"
import kkkkk from "../assets/kkkkk.webp"
import lllll from "../assets/lllll.webp"
import mmmmm from "../assets/mmmmm.webp"
import nnnnn from "../assets/nnnnn.webp"
import ooooo from "../assets/ooooo.webp"
import ppppp from "../assets/ppppp.webp"
import qqqqq from "../assets/qqqqq.webp"
import rrrrr from "../assets/rrrrr.webp"
import sssss from "../assets/sssss.webp"
import ttttt from "../assets/ttttt.webp"
import uuuuu from "../assets/uuuuu.webp"
import vvvvv from "../assets/vvvvv.webp"
import wwwww from "../assets/wwwww.webp"
import xxxxx from "../assets/xxxxx.webp"




const ImageSlider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    { url: "https://thedecorkart.com/cdn/shop/files/009A3500_3d031c18-97cd-487d-bc00-ae7f4f5628d3_330x_crop_center.jpg?v=1701504382",
      text:"Wild Berry Ginkgo Jar With Lid - Large",price:"₹ 2,650.00" ,hoverUrl:aaaa
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5335_330x_crop_center.jpg?v=1731140759",
      text:"Rectangle Metal Storage Basket with Wood Handle - Black - Set of 2",price:"₹ 1,680.00",hoverUrl:bbbb
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5336_0ada9823-98bf-4d98-9cd3-7f3d05eb15b0_330x_crop_center.jpg?v=1731140753",
      text:"Rectangle Metal Storage Basket with Wood Handle - Pink - Set of 2",price:"Sale price₹ 1,680.00",hoverUrl:cccc
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5337_2bb3b497-419d-4f57-a10c-8423cd2cce67_330x_crop_center.jpg?v=1731140745",
      text:"Rectangle Metal Storage Basket with Wood Handle - White - Set of 2",price:"Sale price₹ 1,680.00",hoverUrl:dddd
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5301_330x_crop_center.jpg?v=1730888009",
      text:"Round Metal Storage Basket with Wood Handle - Pink - Set of 2",price:"₹ 980.00",hoverUrl:eeee
     },



    
    { url: "https://thedecorkart.com/cdn/shop/files/009A5306_c390d18f-eca7-4298-b16e-147b4bbe9a67_330x_crop_center.jpg?v=1730887974",
       text:"Round Metal Storage Basket with Wood Handle - Blue - Set of 2",price:"₹ 980.00",hoverUrl:ffff
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5302_330x_crop_center.jpg?v=1730887916",
       text:"Round Metal Storage Basket with Wood Handle - Black - Set of 2",price:"₹ 980.00",hoverUrl:gggg
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5305_707b5727-c80f-4f22-bb95-3a2b6c8fb795_330x_crop_center.jpg?v=1730888057",
       text:"Round Metal Storage Basket with Wood Handle - White - Set of 2",price:"₹ 980.00",hoverUrl:hhhh
    
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5318_d01cf802-46e9-44a2-a7fe-e8e121fd254b_330x_crop_center.jpg?v=1730888274",
        text:"Square Metal Storage Basket with Wood Handle - Green - Set of 2 - Set of 2",price:"₹ 980.00",hoverUrl:iiii
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5317_16072cb8-c15a-4e6d-8aea-0985c91c197a_330x_crop_center.jpg?v=1730888335",
       text:"Square Metal Storage Basket with Wood Handle - Yellow - Set of 2",price:"₹ 980.00",hoverUrl:jjjj
     },




     { url: "https://thedecorkart.com/cdn/shop/files/009A5309_c4aa8979-9631-4861-8778-afb8c22a9792_330x_crop_center.jpg?v=1730888297",
      text:"Square Metal Storage Basket with Wood Handle - Purple - Set of 2",price:"₹ 980.00",hoverUrl:kkkk
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5324_7d9ac503-ae0e-4a2f-9afe-8040151336b1_330x_crop_center.jpg?v=1730888317",
      text:"Square Metal Storage Basket with Wood Handle - White - Set of 2",price:"₹ 980.00",hoverUrl:llll
      },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5313_93544041-3b3c-4b17-9358-1acde3946f70_330x_crop_center.jpg?v=1730888241", 
      text:"Square Metal Storage Basket with Wood Handle - Blue - Set of 2",price:"₹ 980.00",hoverUrl:mmmm
       },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5330_29c2c595-7377-47ad-8b63-827963b40268_330x_crop_center.jpg?v=1730892665",
      text:"Rectangle Metal Storage Basket with Wood Handle - Pink - Set of 2",price:"₹ 1,280.00",hoverUrl:nnnn
       },
     {url:"https://thedecorkart.com/cdn/shop/files/009A5331_3100d8d7-e013-49d1-a7d6-e58e87a1ca3f_330x_crop_center.jpg?v=1730892524",
      text:"Rectangle Metal Storage Basket with Wood Handle - Blue - Set of 2",price:"₹ 1,280.00",hoverUrl:oooo},





    { url: "https://thedecorkart.com/cdn/shop/files/009A5329_1b562f1e-7042-493a-af24-d13f960dc1ca_330x_crop_center.jpg?v=1730892357", 
      text:"Rectangle Metal Storage Basket with Wood Handle - Black - Set of 2",price:"₹ 1,280.00",hoverUrl:pppp
    },
   { url: "https://thedecorkart.com/cdn/shop/files/009A5315_19b628cb-782a-47f2-a372-f1a8e2af4796_330x.jpg?v=1730892933",
    text:"Square Metal Storage Basket with Wood Handle - White - Set of 2",price:"₹ 790.00",hoverUrl:qqqq
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5317_c860d6d3-4430-4281-8e5c-74591954113f_330x_crop_center.jpg?v=1730892957", 
      text:"Square Metal Storage Basket with Wood Handle - Yellow - Set of 2",price:"₹ 790.00",hoverUrl:rrrr
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5319_c017f5fc-94fa-4c1b-9234-dc8e66878be5_330x_crop_center.jpg?v=1731496106",
      text:"Square Metal Storage Basket with Wood Handle - Green - Set of 2",price:"₹ 790.00",hoverUrl:ssss
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5309_4f8a7759-10d6-4d7a-8960-44afadd16544_330x_crop_center.jpg?v=1730892888",
      text:"Square Metal Storage Basket with Wood Handle - PurpleSquare Metal Storage Basket with Wood Handle - PurpleSquare Metal Storage Basket with Wood Handle - Purple - Set of 2",price:"₹ 790.00",hoverUrl:tttt
     },
    

    
    { url: "https://thedecorkart.com/cdn/shop/files/009A5313_f8491a77-8be8-4c95-a425-7ba14d3a6195_330x_crop_center.jpg?v=1730892844",
      text:"Square Metal Storage Basket with Wood Handle - Blue - Set of 2",price:"₹ 790.00",hoverUrl:uuuu
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5310_3fafabb2-a07e-4fc0-938c-afbd8c17f4e2_330x_crop_center.jpg?v=1730892815",
      text:"Square Metal Storage Basket with Wood Handle - Black - Set of 2",price:"₹ 790.00",hoverUrl:vvvv
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5307_0fd8ded7-503a-43ec-8eb2-421421a6c6a7_330x_crop_center.jpg?v=1730892875",
      text:"Square Metal Storage Basket with Wood Handle - Pink - Set of 2",price:"₹ 790.00",hoverUrl:wwww
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5348_21f5422f-86f4-434f-9152-2f8edb92ccd7_330x_crop_center.jpg?v=1731139107",
      text:"'Spoonful' Cutlery Stand - Gold",price:"₹ 490.00",hoverUrl:xxxx
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5344_350ab8fb-c0c4-44ff-87c7-cd52155c33f5_330x_crop_center.jpg?v=1731139114",
      text:"'Cuisine' Cutlery Stand",price:"₹ 590.00",hoverUrl:yyyy
     },
   



    {url:"https://thedecorkart.com/cdn/shop/files/009A5345_953b8a68-65a4-4bfd-bf65-0853c8f2cb17_330x_crop_center.jpg?v=1731139132",
      text:"'Cuisine' Square Cutlery Stand",price:"₹ 590.00",hoverUrl:zzzz
    },
    {url:"https://thedecorkart.com/cdn/shop/files/009A5346_c3690ced-937e-4513-b4e9-ba65745fbbdf_330x_crop_center.jpg?v=1731139139",
      text:"'Mesh' Cutlery Stand",price:"₹ ₹ 590.00",hoverUrl:aaaaa
    },
    {url:"https://thedecorkart.com/cdn/shop/files/009A5347_e9e3bbcb-c6f4-41bf-81b4-19353e0dd5c1_330x_crop_center.jpg?v=1731139144",
      text:"'Spoonful' Cutlery Stand - Black",price:"₹ 590.00",hoverUrl:bbbbb
    },
    {url:"https://thedecorkart.com/cdn/shop/files/009A5310_ee895ba8-358f-4dae-8f68-eb501d3e994f_330x_crop_center.jpg?v=1730888213",
      text:"Square Metal Storage Basket with Wood Handle - Black - Set of 2",price:"₹ 980.00",hoverUrl:ccccc
    },
    {url:"https://thedecorkart.com/cdn/shop/files/009A5312_eb7b2cf2-e4f4-43f8-937a-420e4765bfad_330x_crop_center.jpg?v=1730894134",
      text:"Square Metal Storage Basket with Wood Handle - Green - Set of 2",price:"₹ 790.00",hoverUrl:ddddd
    },

    

   { url: "https://thedecorkart.com/cdn/shop/files/009A5327_18bd8fc2-2086-4079-a430-663c1c979dd2_330x_crop_center.jpg?v=1730892712",
    text:"Round Metal Storage Basket with Wood Handle - Green - Set of 2",price:"₹ 980.00",hoverUrl:eeeee
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5304_42e4c134-01da-40c7-a5aa-70e29f8c93a7_330x_crop_center.jpg?v=1730887992", 
      text:"'Rectangle Metal Storage Basket with Wood Handle - Blue - Set of 2",price:"₹ 1,680.00",hoverUrl:fffff
    },
    { url: "https://thedecorkart.com/cdn/shop/files/009A5339_0480c6b8-b7f4-44a0-b8df-67de00461a0e_330x_crop_center.jpg?v=1731140892",
      text:"Marbleised - Ceramic Top Rooster Basket",price:"₹ 2,250.00",hoverUrl:ggggg
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9886_03702cb6-d658-4527-bb55-1355451620b0_330x_crop_center.jpg?v=1725533442",
      text:"Silver Splatter - Ceramic Top Rooster Basket",price:"₹ 2,250.00",hoverUrl:hhhhh
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9885_330x_crop_center.jpg?v=1725533375",
      text:"Silver Splatter - Ceramic Top Rooster Basket",price:"₹ 2,250.00",hoverUrl:iiii
     },






  
    { url: "https://thedecorkart.com/cdn/shop/files/009A9883_7e83b061-c45c-4339-aed1-2255f9ac0b7b_330x_crop_center.jpg?v=1725533729",
      text:"Glitter Gold - Ceramic Top Rooster Basket",price:"₹ 2,250.00",hoverUrl:jjjjj
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9882_330x_crop_center.jpg?v=1725533397",
      text:"Cherry Flower - Ceramic Top Rooster Basket",price:"₹ 2,250.00",hoverUrl:kkkkk
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A9880_32e7b9a5-bd87-4120-949a-720202451279_330x_crop_center.jpg?v=1725533865",
      text:"Wavy Edge Embossed Utensil Holder - Green",price:"₹ 1,800.00",hoverUrl:lllll
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A7892_330x_crop_center.jpg?v=1720786823",
      text:"Tulips Brass Container With tray",price:"₹ 9,300.00",hoverUrl:mmmmm
     },
    { url: "https://thedecorkart.com/cdn/shop/files/009A8215_55cf602a-5120-440f-809a-2a030b7fff91_330x_crop_center.jpg?v=1711628268",
      text:"Carnival Glass Storage Jar With Lid - Large",price:"₹ 4,650.00",hoverUrl:nnnnn
     },







     { url: "https://thedecorkart.com/cdn/shop/files/009A3507_cb9dacd4-0892-43b8-8818-40bd4d721610_330x_crop_center.jpg?v=1701509408",
        text:"Carnival Glass Storage Jar With Lid - Small",price:"₹ 2,690.00",hoverUrl:ooooo
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A3511_b0eaa817-1e77-44a5-bafa-68153a03551e_330x_crop_center.jpg?v=1701762307",
        text:"Olive Green Ginkgo Jar With Lid - Large",price:"₹ 2,650.00",hoverUrl:ppppp
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A3491_0630ec2a-1c08-4251-b114-b2c713ab84ee_330x_crop_center.jpg?v=1701504143",
        text:"Olive Green Ginkgo Jar With Lid - Medium",price:"₹ 2,490.00",hoverUrl:qqqqq
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A3493_330x_crop_center.jpg?v=1701504187",
        text:"Olive Green Ginkgo Jar With Lid - Small",price:"₹ 2,290.00",hoverUrl:rrrrr
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A3495_ed6a39c5-4932-40a3-b209-25dd0aa07a0c_330x_crop_center.jpg?v=1701504265",
        text:"Storage Glass Jar with Bamboo Lid & Spoon - Large",price:"₹ 950.00",hoverUrl:sssss
       },




       
     { url: "https://thedecorkart.com/cdn/shop/files/009A1108_6d9bdbf3-d4c8-41f1-a210-06c0a53be545_330x_crop_center.jpg?v=1696657901",
        text:"Storage Glass Jar with Bamboo Lid & Spoon - Large",price:"₹ 950.00",hoverUrl:ttttt
       },
      { url: "https://thedecorkart.com/cdn/shop/files/2T8A0219_330x_crop_center.jpg?v=1696053821",
        text:"'Diamond Candy Buffet Jar - Blue",price:"₹ 950.00",hoverUrl:uuuuu
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A5277_b2e37cc5-af1e-43e9-ad72-ecf829efff2d_330x_crop_center.jpg?v=1702376074",
        text:"''Butterfly Motif' Fracturing Glass Container",price:"₹ 3,450.00",hoverUrl:vvvvv
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A5272_b0e5ea8d-edf0-4c77-b8b2-a6a67213640f_330x_crop_center.jpg?v=1702376051",
        text:"'Butterfly Motif' Fracturing Glass Container",price:"₹ 3,450.00",hoverUrl:wwwww
       },
      { url: "https://thedecorkart.com/cdn/shop/files/009A5283_dda5968f-e818-458e-a8a5-314dc8708c6f_330x_crop_center.jpg?v=1706871457",
        text:"Ruby Ribbed Glass Storage Jar - Pink",price:"₹ 1,150.00",hoverUrl:xxxxx
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
        src="https://thedecorkart.com/cdn/shop/files/Ottomans_Banner_1349x.jpg?v=1731151448"
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





export default ImageSlider3;
