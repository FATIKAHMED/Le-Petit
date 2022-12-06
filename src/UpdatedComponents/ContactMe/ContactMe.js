import { Grid, Typography } from '@mui/material';

import arrow from './ContactMeAssets/curlyarrow.png';

const ContactMe = () => {
  return (
    <>
      <Grid container spacing={1} sx={{backgroundColor:"#FCF7F3"}}>
        <Grid item xs={6} sx={{ backgroundColor: '#282828',paddingTop:"91px !important",paddingBottom:"91px",paddingLeft:"78px !important",paddingRight:"78px" }}>
          <Typography fontSize="21px" fontWeight="400" lineHeight="25px" paddingBottom="10px" color="#A78C61" fontFamily="Roboto">
            [ For the Sweetest Moments in Life ]
          </Typography>
          <Typography
            variant="h2"
            fontSize="46.61px"
            fontWeight="400"
            lineHeight="59.7px"
            color="#FFFFFF"
            paddingBottom="10px"
            fontFamily="Gabriela"
          >
            Enjoy the Soothing Taste
          </Typography>
          <Typography
            variant="p"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            color="#FFFFFF"
            paddingBottom="20px"
            fontFamily="Roboto"
          >
            Find Le Petit Amour at local markets throughout the Triangle. Visit our Instagram and Facebook page for the
            most up-to-date locations on where you can find our Macarons (Coming soon in 2022).
            <br />
            <br />
            Are you a store interested in having our Macrons? Please send an email to lepetitamourdesserts@gmail.com or
            fill out the contact order below.
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Typography fontSize="22px" fontWeight="400" lineHeight="28px" color="#A78C61" fontFamily="Gabriela ">
              Learn More
            </Typography>
            <img src={arrow} alt="learnMore" />
          </div>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: '#EEE9E2',paddingTop:"91px !important",paddingBottom:"91px",paddingLeft:"78px !important",paddingRight:"78px" }}>
          <Typography fontSize="21px" fontWeight="400" lineHeight="25px" paddingBottom="10px" color="#A78C61" fontFamily="Roboto">
            [ LEPETITAMOURDESSERTS@GMAIL.COM / NORTH CAROLINA ]
          </Typography>
          <Typography
            variant="h2"
            fontSize="46.61px"
            fontWeight="400"
            lineHeight="59.7px"
            color="#000000"
            paddingBottom="10px"
            fontFamily="Gabriela"
          >
            Contact Me
          </Typography>
          <Typography
            variant="p"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            color="#797979"
            paddingBottom="20px"
            fontFamily="Roboto"
          >
Interested in getting to know more about Le Petit Amour? Looking for wholesale prices? Please send us a message below.
            <br />
            <br />
            Are you a store interested in having our Macrons? Please send an email to lepetitamourdesserts@gmail.com or fill out the contact order below.
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Typography fontSize="22px" fontWeight="400" lineHeight="28px" color="#A78C61" fontFamily="Gabriela">
              Learn More
            </Typography>
            <img src={arrow} alt="learnMore" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMe;
