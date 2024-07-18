import { addNewComplexTableData } from '@/utils/redux/reducers/complexTableSlice';
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ComplexDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    date: '',
    progress: '',
  });

  const handleExit = () => {
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleAdd = () => {
    const newData = {
      name: formData.name,
      status: formData.status,
      date: formData.date,
      progress: parseFloat(formData.progress),
    };

    dispatch(addNewComplexTableData(newData));
    setFormData({
      name: '',
      status: '',
      date: '',
      progress: '',
    });
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Paper elevation={4} sx={{ height: 'max-content', width: { xs: '90%', md: '50%' }, p: 2, bgcolor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Add Complex Data</Typography>
      <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleInputChange} />
      <TextField name="status" label="Status" variant="outlined" value={formData.status} onChange={handleInputChange} />
      <TextField name="date" label="Date" variant="outlined" value={formData.date} onChange={handleInputChange} />
      <TextField name="progress" label="Progress" variant="outlined" type="number" value={formData.progress} onChange={handleInputChange} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disableElevation variant="contained" sx={{ bgcolor: '#4caf50', ':hover': { bgcolor: '#2e7d32' }, width: '45%', borderRadius: '10px' }} onClick={handleAdd}>Add</Button>
        <Button disableElevation variant="contained" sx={{ color: '#4caf50', bgcolor: 'transparent', ':hover': { bgcolor: '#eee' }, width: '45%', borderRadius: '10px' }} onClick={handleExit}>Cancel</Button>
      </Box>
    </Paper>
  )
};

export default ComplexDataForm;