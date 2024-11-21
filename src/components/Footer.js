import React, { useState } from 'react';
import './Components.css';
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { RxTriangleDown } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";



import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#r4f5g6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('white', {
    backgroundColor: 'red',
  }),
}));

const Footer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };



    const links = [
      {
        "href": "#",
        "tx": "Contact Us"
      },
      {
        "href": "#",
        "tx": "Returns + Refunds"
      },
      {
        "href": "#",
        "tx": "Shipping"
      },
      {
        "href": "#",
        "tx": "Terms & Conditions"
      },
      {
        "href": "#",
        "tx": "Privacy Policy"
      },
      {
        "href": "#",
        "tx": "Terms of Service"
      },
      {
        "href": "#",
        "tx": "Refund policy"
      }
    ]
  
    const links2 = [
      {
        "href": "#",
        "tx": "Easy Returns"
      },
      {
        "href": "#",
        "tx": "Gift Cards"
      },
      {
        "href": "#",
        "tx": "the BLOG"
      },
      {
        "href": "#",
        "tx": "Stores"
      },
      {
        "href": "#",
        "tx": "About Us"
      },
      {
        "href": "#",
        "tx": "Track Order"
      }
    ]
  return (
    <div>
      <Box 
        sx={{
          backgroundColor: '#6c645a',
          width: '100%',
          minHeight: '100vh', 
          padding: '20px 0',
        }}
      >
        <Container maxWidth={false} className='bg-[#746b61] pt-20 pb-20'>
        <Container maxWidth="lg">
          <Grid container spacing={2} className='text-white'>
            <Grid item xs={6} md={3}>
              <p className='text-lg mb-5 ff'>SUPPORT</p>
              {
                links.map((link, i) => (
                  <div key={i} className='mb-2'><a href={link.href} className='text-sm hover:text-[#d1ceca]'  >{link.tx}</a></div>
                ))
              }
            </Grid>
            <Grid item xs={6} md={3}>
              <p className='text-lg mb-5 ff'>QUICK LINKS</p>
              {
                links2.map((link, i) => (
                  <div key={i} className='mb-2'><a href={link.href} className='text-sm hover:text-[#d1ceca]'  >{link.tx}</a></div>
                ))
              }
            </Grid>
            <Grid item xs={12} md={3}>

            <p className='mt-[15%]'> GET IN TOUCH</p>
                <div className='flex'>
               <IoLogoWhatsapp className='mt-4' style={{fontSize:"25px"}}/>                <p className='mt-4 ms-3'>9811536888 / 9811338191</p>
                </div>
                <div className='flex'>
                <TfiEmail className='mt-4' style={{fontSize:"25px"}} />
                <p className='mt-3 ms-3'>info@thedecorkart.com</p>
                </div>
                <div className='flex'>
                 <IoStorefrontSharp  className='mt-4'  style={{fontSize:"25px"}}  />                  <p className='mt-3 ms-3'>Our Stores</p>
                </div>
        <div className='flex'> 
          <HiOutlineGlobeAsiaAustralia className='mt-4'  style={{fontSize:"25px"}}  />
         <p className='mt-3 ms-3'>India</p>
         </div> 
         <div>
         <div className='flex mt-3'
        aria-controls={open ? 'simple-menu' : undefined}
       onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />} >
         <HiOutlineGlobeAsiaAustralia   style={{fontSize:"25px",marginRight:"20px"}}  />
        India <RxTriangleDown className='mt-1 ms-3' />
      </div>
      <Menu
  id="simple-menu"   anchorEl={anchorEl}   open={open}   onClose={handleClose}
  PaperProps={{     style: {
    width: '10vw',
      position:'absolute',       left:"90px",
       paddingLeft:"20px" 
    },
  }}
 >
  <FormControlLabel  value="female" control={<Radio />} label="India" />

  <FormControlLabel value="male" control={<Radio />} label="Global" />
</Menu>

        </div>

            </Grid>
            <Grid item xs={12} md={3}>

              <p className='text-lg mb-5 ff mt-[15px] sm:mt-[0px]'>FOLLOW US</p>
      <div className='flex mt-5'>

  <div className=' border-[1px] border-[#837b73]  w-14 h-14 flex justify-center    items-center relative  group overflow-hidden'>     <TiSocialFacebook className='text-2xl 
    group-hover:text-black' />     <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50      transform translate-y-full group-hover:translate-y-0 transition-all duration-300       ease-in-out"></span>   </div>

  <div className=' border-[1px] border-[#837b73]  w-14 h-14 flex justify-center
   items-center relative  group overflow-hidden'>
    <FaInstagram  className='text-2xl
     group-hover:text-black' />
      <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 transform translate-y-full 
      group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>   </div>

   <div className=' border-[1px] border-[#837b73]  w-14 h-14 flex    justify-center items-center relative  group overflow-hidden'>     <FaPinterestP  className='text-2xl group-hover:text-black' />     <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50      transform translate-y-full group-hover:translate-y-0
     transition-all duration-300 ease-in-out"></span>   </div>

   <div className=' border-[1px] border-[#837b73]  w-14 h-14 flex    justify-center items-center relative  group overflow-hidden'>
<FaYoutube  className='text-2xl group-hover:text-black'/>
    <span className="absolute inset-0 bg-[#ffffff] opacity-0 group-hover:opacity-50 
    transform translate-y-full group-hover:translate-y-0 
    transition-all duration-300 ease-in-out"></span>
  </div>
   </div>

          
          <p className='text-sm mt-10 ff uppercase'>Experience The Decor Kart App</p>
          <div className='flex justify-between mt-5 '><img src='https://cdn.shopify.com/s/files/1/0962/2574/files/app-store.png?v=1691142341'className='w-32'/>
          <img src='https://cdn.shopify.com/s/files/1/0962/2574/files/app-store.png?v=1691142341' className='w-32'/></div>
            </Grid>
          </Grid>
        </Container>

      </Container>

    <Container maxWidth={false} className='bg-[#746b61]'>
    <Container maxWidth="lg">
<img src='https://cdn.shopify.com/s/files/1/0962/2574/files/decorkart.png?v=1687341223' className='w-full h-full'/>
      </Container>
      <Container maxWidth="lg" className='pt-14 pb-14 flex justify-between flex-col sm:flex-row'>
<p className='text-white ff text-xs flex items-center'>Shivalik Meta Plast Industries © 2024</p><div className='flex items-start sm:items-center gap-3 flex-col sm:flex-row'><span className='text-[#d6d3d0] text-xs'>We accept</span>
<div className='flex items-center gap-2 sm:gap-3'>
  <img src='https://cdn.shopify.com/s/files/1/0962/2574/files/payment-cashon.jpg?v=1689063981' className='w-11 rounded bg-white p-1'/>
<img src='https://cdn.shopify.com/s/files/1/0962/2574/files/upi-payment-icon_b5e355f8-fca5-47a8-9f6d-2f97cee8b8c4.png?v=1689063980' className='w-11 rounded bg-white p-1'/>
<img src='https://cdn.shopify.com/s/files/1/0962/2574/files/googlepay.png?v=1689063981' className='w-11 rounded bg-white p-1'/>
<img src='https://cdn.shopify.com/s/files/1/0962/2574/files/paytm-icon_2a91e6dd-3fee-4081-9fb6-9808bd4a62f7.png?v=1689063980' className='w-11 rounded bg-white p-1'/>
<img src='https://cdn.shopify.com/s/files/1/0962/2574/files/payment-icon1.jpg?v=1689063980' className='w-11 rounded bg-white p-1'/>
<img src='https://logowik.com/content/uploads/images/emi3431.logowik.com.webp' className='w-10 rounded '/>
<div className='inline-block bg-white  rounded p-1 pl-2 pr-2 text-xs'><span className='pb-0 mb-0'>PAY LATER</span></div></div>
</div>
      </Container>
    </Container>
        
      </Box>
    </div>
  );
};

export default Footer;