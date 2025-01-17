import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/utils/redux/store';
import ComplexDataForm from './ComplexDataForm/ComplexDataForm';
import FourColumnDataForm from './FourColumnDataForm/FourColumnDataForm';
import CheckDataForm from './CheckDataForm/CheckDataForm';
import DevelopmentDataForm from './DevelopmentDataForm/DevelopmentDataForm';

const Modal = () => {
  const type = useSelector((state: RootState) => state.modalVisibility.type);

  return (
    <>
      {type === 'development-table' && (
        <Box sx={{ width: { xs: '100%', lg: 'calc(100vw - 300px)' }, height: '100vh', position: 'fixed', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <DevelopmentDataForm/>
        </Box>
      )}

      {type === 'check-table' && (
        <Box sx={{ width: { xs: '100%', lg: 'calc(100vw - 300px)' }, height: '100vh', position: 'fixed', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CheckDataForm/>
        </Box>
      )}

      {type === 'four-column-table' && (
        <Box sx={{ width: { xs: '100%', lg: 'calc(100vw - 300px)' }, height: '100vh', position: 'fixed', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FourColumnDataForm/>
        </Box>
      )}

      {type === 'complex-table' && (
        <Box sx={{ width: { xs: '100%', lg: 'calc(100vw - 300px)' }, height: '100vh', position: 'fixed', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ComplexDataForm/>
        </Box>
      )}

      {type !== 'development-table' && type !== 'complex-table' && type !== 'check-table' && type !== 'four-column-table' && (
        null
      )}
    </>
  );
};

export default Modal;
