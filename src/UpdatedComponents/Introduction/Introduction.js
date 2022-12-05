import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import React from 'react';
import './Introduction.css';
import vector from './IntroductionAssets/Vector.png';
import image from "./IntroductionAssets/Image1.png";
import arrow from './IntroductionAssets/curlyarrow.png';
import about from './IntroductionAssets/aboutme.png';


function Introduction() {
  return (
    <>
      <div style={{ backgroundColor: '#FCF7F3', width: '100%', paddingTop: '12vh',position:'relative' }}>
          <img src={vector} alt="vector2" className="vector-background" />
            <Grid container spacing={2}
            sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
            >
              <Grid item xs={4}>
                <img src={image} alt="table"className='table' />

              </Grid>
              <Grid item xs={4}
              
              >
                <Typography variant="h6"
                color="#A78C61"
                fontSize="21px"
                lineHeght="25px"
                fontWeight="400"
                fontFamily="Roboto"
                >
                    [ Meet Your Baker ]
                </Typography>
                <Typography
                fontSize="47px"
                fontWeight="400"
                lineHeight="60px"
                fontFamily="
                Gabriela"
                >
                Macarons & Me
                </Typography>
                <Typography
                variant='p'
                fontSize="18px"
                fontWeight="400"
                lineHeight="26px"
                color="#797979"
                fontFamily="Roboto"
                >
                  Hi, my name is Nour. When it comes to sweets, I am like a child in a candy store… I must have and try them all! My passion for baking began sometime in 2009, but my passion for sweets began before I can even remember. 
                  <br/>
                  <br/>
                </Typography>
                <Typography
                variant='p'
                fontSize="18px"
                fontWeight="400"
                lineHeight="26px"
                color="#797979"
                fontFamily="Roboto"
                >
                  It wasn’t long before I found myself pursuing different things –that’s how life goes. I did photography for 6 years, and while it was not my initial dream, the experience taught me the power of human connection. Throughout those 6 years I learned what passion and care can bring to people. 
                  <br/>
                  <br/>
                </Typography>
                 <Typography
                variant='p'
                fontFamily="Roboto"
                fontSize="18px"
                fontWeight="400"
                lineHeight="26px"
                color="#797979"
                >
              In 2020 I finally embraced my original passion for baking and decided to take it a whole new level. I became determined to master the most difficult dessert to bake –the French Macaron. It has been a long-awaited journey but I’m happy to finally share my creations with you!  
              <br/>
              <br/>
                </Typography>
                <Typography
                variant='p'
                fontSize="18px"
                fontWeight="400"
                lineHeight="26px"
                color="#797979"
                fontFamily="Roboto"
                >
                In August 2021, I officially founded Le Petit Amour, French for "Little Love.” With passion, love, and a lot of hard work, I hope to provide a high-end experience for you and your tastebuds. Biting into these handcrafted desserts –I wish to bring you a sweet moment and pure bliss through every bite. -Nour 
                
                </Typography>
                <div style={{display:"flex",gap:"10px",alignItems:"center",padding:"10px"}}>
                  <Typography
                  fontWeight="400"
                  fontSize="22px"
                  lineHeight="28px"
                  color= "#A78C61"
                  fontFamily="Gabriela"

                  >Learn More</Typography>
                  <img className='curlyarrow' src={arrow} alt="curly arrow"/>
                </div>
              </Grid>
              <Grid item xs={4}>
                <img src={about} alt="about me" className='about-me'/>
                <Typography
                variant="p"
                fontWeight="400"
                fontSize="18px"
                lineHeight="26px"
                padding="10px"
                color="#797979"
                marginTop="15px"
                fontFamily="Roboto"
                >
                Simply delicious desserts. That is my specialty and my passion. A little pastry that can excite and warm all at once. It’s a gift I am grateful to offer you, a gift that sparks enjoyment in the little moments –through the little bites.
                </Typography>
              </Grid>
            </Grid>
        
      </div>
    </>
  );
}

export default Introduction;
