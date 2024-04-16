import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      
      <Grid  item xs={12} sm={6} md={3}>
        <Link to='/locate'>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Partners
        </Typography>
        </Link>
      </Grid>
     
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Solutions
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Marketing
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Analytics
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Commerce
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Link to='/documentationPdf'>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Documentation
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Guides
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          API Status
        </Typography>
        </Link>
      </Grid>
     
      <Grid item xs={12} sm={6} md={3}>
         <Link to='/privaciy-policy'>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Claim
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Terms
        </Typography>
        </Link>
      </Grid>
      
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 Om Traders. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Visit @OmTrades To explore a shopping Experience.
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default Footer;
