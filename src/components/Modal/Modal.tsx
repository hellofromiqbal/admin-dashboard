'use client'

import React, { useState } from 'react';
import { Box, Button, Paper, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComplexTableData } from '@/utils/redux/reducers/complexTableSlice';
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';
import { RootState } from '@/utils/redux/store';
import ComplexDataForm from './ComplexDataForm/ComplexDataForm';

const Modal = () => {
  const type = useSelector((state: RootState) => state.modalVisibility.type);

  return (
    <>
      {type === 'complex-table' && (
        <Box sx={{ width: 'calc(100vw - 300px)', height: '100vh', position: 'fixed', bgcolor: 'rgba(0, 0, 0, .5)', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
