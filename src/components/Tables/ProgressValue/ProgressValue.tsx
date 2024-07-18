import React from 'react';
import { Box, LinearProgress, linearProgressClasses, styled, Typography } from '@mui/material';

type ProgressValueProps = {
  value: number;
  showProgressBar?: boolean;
  showProgressPercentage?: boolean;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const ProgressValue = ({ value, showProgressBar = false, showProgressPercentage = true }: ProgressValueProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {showProgressPercentage && <Typography variant="body2">{value}%</Typography>}
      {showProgressBar && <BorderLinearProgress variant="determinate" sx={{ width: '80px' }} value={value} />}
    </Box>
  )
};

export default ProgressValue;