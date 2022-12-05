import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';

import Navbar from '../UpdatedComponents/Nav-section/Navbar';
import Landing from '../UpdatedComponents/Landing/Landing';
import MiddleLayer from '../UpdatedComponents/MiddleLayer/MiddleLayer';
import Introduction from '../UpdatedComponents/Introduction/Introduction';
import ContactMe from '../UpdatedComponents/ContactMe/ContactMe';
import Footer from '../UpdatedComponents/Footer/Footer';
import PictureLayer from '../UpdatedComponents/PictureLayer/PictureLayer';



// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home | Le Petit </title>
      </Helmet>
 
        <div
        style={{backgroundColor:"#FCF7F3",padding:'10px'}}
        >
        
      <Navbar/>
     <Landing/> 
      <MiddleLayer/> 
      <Introduction/>
      <PictureLayer/>
      <ContactMe/>
      <Footer/>
     </div>  
      
    </>
  );
}
