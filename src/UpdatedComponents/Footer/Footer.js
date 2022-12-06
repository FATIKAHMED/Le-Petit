import { Grid, Typography } from '@mui/material';

import facebook from './FooterAssets/Facebook.png';
import instagram from './FooterAssets/Instagram.png';
import linkedin from './FooterAssets/linkedin.png';

const Footer = () => {
  return (
    <div style={{background:"#FCF7F3"}}>
      <hr/>
      <Grid container spacing={5}
      sx={{display:"flex",alignItems:"center",padding:"20px"}}
      >
        <Grid item xs={4}>
          <Typography
            variant="p"
            fontWeight="400"
            fontSize="18px"
            lineHeight="26px"
            color="
                #000000"
                fontFamily="Roboto"
          >
            © All Right Reserved
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                fontFamily="
                Open Sans"
                fontStyle="normal"
                fontWeight="600"
                fontSize="15px"
                lineHeight="21px"
                color="#000000"
              >
                Terms & Services
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                fontFamily="
                Open Sans"
                fontStyle="normal"
                fontWeight="600"
                fontSize="15px"
                lineHeight="21px"
                color="#000000"
              >
                Privacy Policy
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                fontFamily="
                Open Sans"
                fontStyle="normal"
                fontWeight="600"
                fontSize="15px"
                lineHeight="21px"
                color="#000000"
              >
                Contact
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',gap:"10px" }}>
            <img src={facebook} alt="socialmedia" />
            <img src={instagram} alt="socialmedia" />
            <img src={linkedin} alt="socialmedia" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
