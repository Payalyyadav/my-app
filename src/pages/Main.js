import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Pages.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



// const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  const Main = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    window.addEventListener('scroll', scrollToTop);
    
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);
 
  return (
    <div>
      
       <Box
     sx={{
        position: 'relative',
        height: '590px',
        width: '100%',
        marginTop:'20px'
      }}
       >

      <img
        src="https://thedecorkart.com/cdn/shop/files/Lighting_Layers_1349x.jpg?v=1731141314"
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
 
 

<Container className='mb-20' sx={{ flexGrow: 1, marginTop: '40px' }}>
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src="https://thedecorkart.com/cdn/shop/files/1_5a4515f8-ad70-4237-8e1c-1f9b5e6633f9.jpg?v=1731151074"
          alt="Background"
          style={{
            height: '500px',
            width: '100%',
            
          }}
        />
        

        {/* <img
          src="https://thedecorkart.com/cdn/shop/files/4_8f014ef6-7092-4307-82c0-12cc5e1a1510.jpg?v=1731151072"
          alt="Background"
          style={{
            height: '300px',
            width: '100%',
            marginTop:'20px'
            }}
             /> */}


<div style={{ position: 'relative', width: '100%', height: '300px', marginTop: '20px' }}>
  <img
    src="https://thedecorkart.com/cdn/shop/files/4_8f014ef6-7092-4307-82c0-12cc5e1a1510.jpg?v=1731151072"
    alt="Background"
    style={{
      height: '100%',
      width: '100%',
      
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '3%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
    }}
  >
       <a href='#' className='decoration-2 decoration-white decoration-solid underline '
          style={{ textUnderlineOffset: '4px' }} >WALL LIGHTS</a>
  </div>
</div>

      
        
        <div
          style={{
            position: 'absolute',
            bottom: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          }}
        >
          <a href='#' className='decoration-2 decoration-white decoration-solid underline '
          style={{ textUnderlineOffset: '4px' }} >FAN LIGHTS</a>
        </div>
      </div>
    </Grid>

    <Grid item xs={4}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src="https://thedecorkart.com/cdn/shop/files/2_1_ce740c59-8277-4660-84b1-80b93366353a.jpg?v=1731151074"
          alt="Background"
          style={{
            height: '440px',
            width: '93%',
            marginLeft: '2%',
          
          }}
        />


        
<div style={{ position: 'relative', width: '100%', height: '300px', marginTop: '20px' }}>
  <img
    src="https://thedecorkart.com/cdn/shop/files/3_b423552e-b8c0-46ae-85cb-c41ca79a0f81.jpg?v=1731151073"
    alt="Background"
    style={{
      height: '420px',
      width: '93%',
      marginLeft: '2%',
          
      
    }}
  />
  <div
    style={{
      position: 'absolute',
     bottom:'-110px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
    }}
  >
       <a href='#' className='decoration-2 decoration-white decoration-solid underline '
          style={{ textUnderlineOffset: '4px' }} >PENDANT LIGHTS</a>
  </div>
</div>

        
        <div
          style={{
            position: 'absolute',
            bottom: '49%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
           
          }}
        >
          <a href='#' className='decoration-2 decoration-white decoration-solid underline '
          style={{ textUnderlineOffset: '4px' }} >CHANDELIERS</a>
        </div>
      </div>
    </Grid>

    <Grid item xs={4}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src="https://thedecorkart.com/cdn/shop/files/5_72d9ff5a-a9f7-4aa2-b98a-3083b7b83d75.jpg?v=1731151074"
          alt="Background"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
          }}
        />


        <div className='text-center mt-5 '>
          <h1 className='text-[22px] mt-[60px]'>Magical Illumination</h1>
          <p className='text-[20px] mt-1'>Create the perfect ambiance with lighting </p>
           <p className='text-[20px] mt-1'>that adds warmth and style to every room</p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          
          }}
        >
         <a href='#' className='decoration-2 decoration-white decoration-solid underline '
          style={{ textUnderlineOffset: '4px' }} >OUTDOOR LIGHTS</a>
        </div>
      </div>
    </Grid>
  </Grid>
</Container>


<Box
     sx={{
        position: 'relative',
        height: '590px',
        width: '100%',
        marginTop:'8%'
      }}
       >

      <img
        src="https://thedecorkart.com/cdn/shop/files/Small_Sculptures_1349x.jpg?v=1731160146"
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



 





 </div>
  )
}

export default Main




