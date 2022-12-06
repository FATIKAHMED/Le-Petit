import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import React from 'react'

import bullet from './ExtendedMiddleLayerAssets/Frame.png';




function ExtendedMiddleLayer() {
  return (
    <>
           <Grid container spacing={4} sx={{ height: '695px', backgroundColor: '#EEE9E2', padding: '25px' }}>
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '20px' }}
        >
          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              3 Simple Ingredients
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography variant="p" fontSize="18px" lineHeight="26px" color="#797979" textAlign="left" fontFamily="Roboto">
              Our macarons are delicately flavored and made with 3 simple ingredients: almond flour, sugar, and egg
              whites. These pillowy desserts are the jewels of all desserts, and a guilt-free pleasure that can be
              enjoyed on any occasion.
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              The Perfect Treat or Gift
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography
              variant="p"
              fontSize="18px"
              lineHeight="26px"
              color="#797979;"
              textAlign="left"
              paddingBottom="25px"
              fontFamily="Roboto"
            >
              Our macarons make the perfect gift for any occasion – whether it be an early morning snack or just because
              you want something good tasting without all the ominous fats usually associated with higher calorie
              desserts… like brownies (not saying there isn't room in our diet for those!).
              <br />
              Give the gift of Le Petit Amour and let your loved ones enjoy a little piece of France!
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              Locally Made, Locally Sourced
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography
              variant="p"
              fontSize="18px"
              lineHeight="26px"
              color="#797979;"
              textAlign="left"
              paddingBottom="25px"
              fontFamily="Roboto"
            >
              We take pride in being a local business and supporting the community. Our macarons are made in the
              triangle – serving Raleigh, Durham, and Chapel Hill. Many of our flavors are sourced from other local
              businesses around the area.
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '20px' }}
        >
          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              Committed to Quality
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography variant="p" fontSize="18px" lineHeight="26px" color="#797979" textAlign="left" fontFamily="Roboto">
              We make small batches at a time, so our macarons are always fresh. These macarons are piped and personally
              filled by hand using only clean and quality ingredients.
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              A Richer Filling
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography
              variant="p"
              fontSize="18px"
              lineHeight="26px"
              color="#797979;"
              textAlign="left"
              paddingBottom="25px"
              fontFamily="Roboto"
            >
              You'll find most macarons to be filled with buttercream, but we prefer to use ganache, a silky mixture of
              chocolate and cream.
              <br />
              You'll find most macarons to be filled with buttercream, but we prefer to use ganache, a silky mixture of
              chocolate and cream.{' '}
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItem: 'center', paddingBottom: '15px' }}>
            <img className="bullet_point" src={bullet} alt="bullet_point" />
            <Typography
              variant="h3"
              fontSize="21px"
              lineHeight="25px"
              letterSpacing="0.03rem"
              textAlign="left"
              color="#A78C61;"
              paddingLeft="5px"
              fontFamily="Roboto"
            >
              Disclaimer: [**MAY ALTER WITH NEW KITCHEN**]
            </Typography>
          </div>
          <div style={{ paddingBottom: '25px' }}>
            <Typography
              variant="p"
              fontSize="18px"
              lineHeight="26px"
              color="#797979;"
              textAlign="left"
              paddingBottom="25px"
              fontFamily="Roboto"
            >
              *All macarons contain almonds, eggs, milk. May contain soy, wheat, coconut, and other tree nuts. Not baked
              in an allergen-free kitchen due to shared equipment. Macarons are naturally gluten free, but cross-contact
              with gluten-containing ingredients can occur.
            </Typography>
          </div>
        </Grid>
      </Grid> 
    </>
  )
}

export default ExtendedMiddleLayer
