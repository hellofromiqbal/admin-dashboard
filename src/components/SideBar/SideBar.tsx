'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import UpgradeToProCard from '../UpgradeToProCard/UpgradeToProCard';

const SideBar = () => {
  const [selectedListItem, setSelectedListItem] = useState(2);

  const navList = [
    { label: 'Main Dashboard', href: '#', icon: <HomeIcon fontSize='small'/> },
    { label: 'NFT Marketplace', href: '#', icon: <ShoppingCartOutlinedIcon fontSize='small'/> },
    { label: 'Data Tables', href: '#', icon: <BarChartOutlinedIcon fontSize='small'/> },
    { label: 'Profile', href: '#', icon: <PersonIcon fontSize='small'/> },
    { label: 'Sign In', href: '#', icon: <HttpsIcon fontSize='small'/> },
    { label: 'RTL Admin', href: '#', icon: <HomeIcon fontSize='small'/> },
  ];

  return (
    <Box sx={{ height: '100%', p: '20px', bgcolor: '#fff' }}>
      <Typography variant="h4" sx={{ mb: '20px', textAlign: 'center' }}>Dashboard</Typography>
      <Divider/>
      <Box sx={{ height: '90%', overflow: 'auto', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <List>
          {navList.map((listItem, index) => (
            <ListItem key={index} disablePadding sx={{ borderRight: selectedListItem === index ? '4px solid blue': '' }}>
              <ListItemButton onClick={() => setSelectedListItem(index)}>
                <ListItemIcon sx={{ color: selectedListItem === index ? 'blue': '' }}>
                  {listItem.icon}
                </ListItemIcon>
                <ListItemText primary={listItem.label} sx={{ color: selectedListItem === index ? 'blue': '' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: { lg: '5rem' } }}>
          <UpgradeToProCard/>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;