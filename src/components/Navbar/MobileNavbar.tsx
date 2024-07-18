'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';

const MobileNavbar = () => {
  const [selectedListItem, setSelectedListItem] = useState(2);

  const navList = [
    { label: 'Main Dashboard', href: '#', icon: <HomeIcon fontSize='medium'/> },
    { label: 'NFT Marketplace', href: '#', icon: <ShoppingCartOutlinedIcon fontSize='medium'/> },
    { label: 'Data Tables', href: '#', icon: <BarChartOutlinedIcon fontSize='medium'/> },
    { label: 'Profile', href: '#', icon: <PersonIcon fontSize='medium'/> },
    { label: 'Sign In', href: '#', icon: <HttpsIcon fontSize='medium'/> },
    { label: 'RTL Admin', href: '#', icon: <HomeIcon fontSize='medium'/> },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', bgcolor: '#fff', height: '80px' }}>
      {navList.map((listItem, index) => (
        <Button
          key={index}
          sx={{
            width: '100%',
            color: selectedListItem === index ? 'blue' : 'gray'
          }}
          onClick={() => setSelectedListItem(index)}
        >
          {listItem.icon}
        </Button>
      ))}
    </Box>
  );
};

export default MobileNavbar;