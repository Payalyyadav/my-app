import React from 'react'
import { Box, Typography } from '@mui/material';

const Video = () => {
    const videoData = [
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_41e034c4-ee04-42cf-bf3f-917f4fe1cb7d.mp4?v=1728656702", text: "New & Trending" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_a6c2aaae-15ad-47e4-aaa6-9e62d992ecce.mp4?v=1728656716", text: "Best Sellers" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_9cb19e30-3023-4c47-96dd-3bba72874f31.mp4?v=1728656735", text: "Kitchen Accessories" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_7be4364d-d3ea-469e-9823-397dd3bf0362.mp4?v=1728656816", text: "Decor" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_619f65d9-37d0-4e73-9b20-1e06bf0cc8d2.mp4?v=1728656830", text: "Kitchen" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_e1b8b058-d847-47d4-9d7b-85566b33cbbc.mp4?v=1728656802", text: "Lighting" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_ccdc1c5d-19f6-43b5-b28e-5feba727a204.mp4?v=1728656789", text: "Wall Decor" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_178bd0d7-4ff4-45ae-ad9d-57009e667bd2.mp4?v=1728656776", text: "Furniture" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_f7984270-42c6-4162-98ab-1725c5f7263e.mp4?v=1728656761", text: "Bath" },
        { url: "https://cdn.shopify.com/s/files/1/0962/2574/files/whatmore_tn_fd5ee590-8dd5-471e-ae94-714313b63f7b.mp4?v=1728656754", text: "Garden" },
      ];


      const renderCircles = () => {
        return videoData.map((video, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',
              width: '100px',
              gap: '5px', 
            }}
          >
            <Box
              sx={{
                width: '100px',
                height: '100px',
                border: '2px solid gray',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              <Box
                sx={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  preload="metadata"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={video.url} type="video/mp4" />
                </video>
              </Box>
            </Box>
          
            <Typography variant="body2" sx={{ textAlign: 'center', fontSize:'12px', fontFamily: 'ui-sans-serif', }}>
              {video.text}
            </Typography>
          </Box>
        ));
      };
  return (
    <div>
        <Box
      sx={{
        marginTop:'15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {renderCircles()}
    </Box>
    </div>
  )
}

export default Video

