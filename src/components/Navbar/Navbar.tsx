'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Breadcrumbs, Link } from '@mui/material';
import { InfoOutlined, NotificationsOutlined, Palette } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: '0px', zIndex: '3' }}>
      <AppBar position="static" sx={{ p: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(30px)', boxShadow: 'none', color: 'black' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '10px', md: 0 }, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '12px' }}>
              <Link  underline="hover" color="inherit" href="/">
                Pages
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Data Tables
              </Link>
            </Breadcrumbs>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Data Tables
            </Typography>
          </Box>
          <Box sx={{ p: '10px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px', bgcolor: 'white', boxShadow: 'rgba(112, 144, 176, 0.18) 14px 17px 40px 4px' }}>
            <Search sx={{ flexGrow: 1, borderRadius: '30px', bgcolor: '#f5f9fe' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <NotificationsOutlined fontSize='small' sx={{ cursor: 'pointer' }}/>
              <InfoOutlined fontSize='small' sx={{ cursor: 'pointer' }}/>
              <Palette fontSize='small' sx={{ cursor: 'pointer' }}/>
              <Box sx={{ width: '40px', height: '40px', borderRadius: '100%', bgcolor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <Typography variant="subtitle2">AP</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
