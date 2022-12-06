import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import React from 'react';

import './MiddleLayer.css';
import rectangle from './MiddleLayerAssets/Rectangle.png';
import card1 from './MiddleLayerAssets/card1.png';
import curlyarrow from './MiddleLayerAssets/Arrow.png';

const MiddleLayer = () => {
  return (
    <>
      <Box>
        <Grid container spacing={1} sx={{ height: '50rem', position: 'relative' }}>


          <div className="pattern" />

          <Grid item xs={6} sx={{ padding: '10px' }}>
            <Box sx={{ position: 'absolute' }}>
              <img src={card1} alt="card" />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{zIndex:10,height:"100%",position:"relative"}}>
              <img src={rectangle} className="box" alt="box"/>
            <Box sx={{ maxWidth: '41.938rem', height: '24.25rem', backgroundColor: '#282828',position:"absolute",width:"100%",bottom:"-1.25rem",right:"13.438rem",padding:"30px" }}>
              <Typography
              fontWeight="400"
              fontSize="21px"
              lineheight="25px"
              fontFamily="Roboto"
              color="#A78C61"
              >
              [ Established in Raleigh NC ]
              </Typography>
              <Typography
              variant="p"
              fontWeight="400"
              fontSize="46px"
              lineheight="50px"
              fontFamily="Gabriela"
                             color="#FFFFFF"
              >
              Handcrafted Macarons 
              </Typography>
                <br/>
              <Typography
              variant='p'
              fontWeight="400"
              fontSize="18px"
              lineheight="26px"
              fontFamily="Roboto"
              color="#797979"
              >
              Macarons were introduced to France in the 16th century by Catherine de' Medici. Today, macarons are enjoyed all over the world.
              <br/>
              <br/>
              Although you may find other macarons with a wide variety of flavors and fillings, we believe in the simplicity of this historic dessert. You won't find fruity pebbles or cotton candy at Le Petit Amour.
              </Typography>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <Typography
                fontSize="22px"
                fontWeight="400"
                lineHeight="28px"
                color="#A78C61"
                fontFamily="Gabriela"
                >
                  Learn More
                </Typography>
                <img src={curlyarrow} alt="learn more"/>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default MiddleLayer;
