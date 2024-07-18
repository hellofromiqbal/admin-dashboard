import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { addNewCheckTableData } from '@/utils/redux/reducers/checkTableSlice';
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';

const CheckDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    progress: '',
    quantity: '',
    date: '',
  });

  const handleExit = () => {
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleAdd = () => {
    const newData = {
      name: formData.name,
      progress: parseFloat(formData.progress),
      quantity: parseInt(formData.quantity),
      date: new Date().toISOString(),
    };

    dispatch(addNewCheckTableData(newData));
    setFormData({
      name: '',
      progress: '',
      quantity: '',
      date: '',
    });
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Paper elevation={4} sx={{ height: 'max-content', width: { xs: '90%', md: '50%' }, p: 2, bgcolor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Add Check Data</Typography>
      <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleInputChange} />
      <TextField name="progress" label="Progress" variant="outlined" type="number" value={formData.progress} onChange={handleInputChange} />
      <TextField name="quantity" label="Quantity" variant="outlined" type="number" value={formData.quantity} onChange={handleInputChange} />
      <TextField name="date" label="Date" variant="outlined" value={formData.date} onChange={handleInputChange} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disableElevation variant="contained" sx={{ bgcolor: '#4caf50', ':hover': { bgcolor: '#2e7d32' }, width: '45%', borderRadius: '10px' }} onClick={handleAdd}>Add</Button>
        <Button disableElevation variant="contained" sx={{ color: '#4caf50', bgcolor: 'transparent', ':hover': { bgcolor: '#eee' }, width: '45%', borderRadius: '10px' }} onClick={handleExit}>Cancel</Button>
      </Box>
    </Paper>
  );
};

export default CheckDataForm;
