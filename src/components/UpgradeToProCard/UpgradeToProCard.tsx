import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const UpgradeToProCard = () => {
  return (
    <Box sx={{ width: '100%', height: '230px', borderRadius: '30px', px: '20px', pt: '50px', pb: '20px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px', bgcolor: '#7a78ff', color: 'white', textAlign: 'center' }}>
      <Box sx={{ width: '90px', height: '90px', border: '5px solid white', borderRadius: '100%', alignSelf: 'center', position: 'absolute', mt: '-100px', bgcolor: '#7a78ff' }}></Box>
      <Typography variant="h6">Upgrade to PRO</Typography>
      <Typography>Improve your development process and start doing more with Horizon UI PRO!</Typography>
      <Button variant="contained" sx={{ boxShadow: '0 0 0 0', mt: 'auto', borderRadius: '15px', bgcolor: 'lightblue' }}>Upgrade to PRO</Button>
    </Box>
  )
};

export default UpgradeToProCard;