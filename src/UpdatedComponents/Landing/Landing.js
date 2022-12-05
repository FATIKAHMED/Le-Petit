import React from 'react';

import { Grid, Typography,Button, Box } from '@mui/material';

import './Landing.css'
import heart from './LandingAssets/hearts.png';
import picture from './LandingAssets/Left.png';
import honeybiscuits from './LandingAssets/honeyovercookies.png';
import vecImg from './LandingAssets/line.png'



const Landing = () => {
  return (
      <>
    


<Box sx={{position:"relative",maxWidth:"95rem",height:"60rem",marginBottom:"40px"}}>
      <img src={vecImg} alt='background vector' className='vecImage1' />
      <Grid container spacing={2} sx={{ backgroundColor: '#FCF7F3',position:"relative" }}>
        <Grid item xs={6}>
          <Typography
            variant="p"
            // fontFamily="Roboto"
            fontSize="1.331rem"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="1.56rem"
            color="#A78C61"
            paddingLeft="2.5rem"
          >
            [ From the heart of the Triangle ]
          </Typography>
          <Typography

            variant="h1" component="h2"
            position="relative"
            zIndex="55"
            fontFamily="Gabriela"
            fontSize="2.913rem"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="4.125rem"
            color="#000000"
            paddingLeft="2.5rem"
          >
            Handcrafted Macarons
          </Typography>
          <Typography
            variant="h6"
            fontSize="1.331rem"
            fontFamily="Roboto"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="1.px"
            color="#000000"
            paddingLeft="2.5rem"
            paddingTop="0.625rem"
          >
            Established in Raleigh NC
          </Typography>
          <div className='button_container'>
            <Button variant="contained"><Typography
              fontFamily="Open Sans"
              fontSize="0.938rem"
              fontWeight="600"
              lineHeight="1.25rem"
              fonntStyle="normal"
            >
              Contact us
            </Typography>
            </Button>
            <img src={heart} alt="vector" />
          </div>
          <img className="honeybiscuits" src={honeybiscuits} alt="honey biscuits" />

        </Grid>

        <Grid item xs={6}
        >
          <img src={picture} className="left" alt="left"/>
        </Grid>

      </Grid>
      </Box>
</>
      
  );
};

export default Landing;
