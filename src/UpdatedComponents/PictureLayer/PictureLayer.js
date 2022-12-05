import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import sweetbox from './PictureLayerAssets/BigCard.png';
import arrow from './PictureLayerAssets/curlyarrow.png';
import underline from './PictureLayerAssets/UnderLine.png';
import Rectangle from './PictureLayerAssets/rectangle.png';
import './PictureLayer.css'



const PictureLayer=()=>{
    return(
        <>
        <div
        style={{position:"relative",marginTop:"18rem",height:"56rem"}}>
            <div className='blackcard-container'>
                <img className='positioning' src={Rectangle} alt="rectangle"/>
              <div className='blackcard'>
                <Typography
                variant='h6'
                fontSize="21.3px"
                fontFamily="Roboto"
                fontWeight="400"
                lineHeight="25px"
                color="#A78C61"
                >
                    [ The French Macaron  ]
                </Typography>
                <Typography
                variant='h2'
                fontSize="47px"
                fontFamily="Gabriela"
                fontWeight="400"
                lineHeight="60px"
                color="#FFFFFF"
                paddingBottom="1.5rem"
                >
                 The Dior of Dessert
                </Typography>
                <img src={underline} alt="underline"/>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px',paddingTop:"1.5rem" }}>
            <Typography fontSize="22px" fontWeight="400" lineHeight="28px" color="#A78C61" fontFamily="Gabriela">
              Learn More
            </Typography>
            <img src={arrow} alt="learnMore" />
          </div>
              </div>
            </div>
            <div className='box-container' >
            <img src={sweetbox} alt="card"/>
            </div>
        </div>
        </>
    );
}
export default PictureLayer;