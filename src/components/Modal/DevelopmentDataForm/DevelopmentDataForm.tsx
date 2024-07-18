import { addNewDevelopmentTableData } from '@/utils/redux/reducers/developmentTableSlice';
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const techOptions = [
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
  { value: 'windows', label: 'Windows' },
];

const DevelopmentDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    tech: [] as string[],
    date: '',
    progress: '',
  });

  const handleExit = () => {
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleAdd = () => {
    const newData = {
      name: formData.name,
      tech: formData.tech,
      date: formData.date,
      progress: parseFloat(formData.progress),
    };

    dispatch(addNewDevelopmentTableData(newData));
    setFormData({
      name: '',
      tech: [],
      date: '',
      progress: '',
    });
    dispatch(setModalVisibility({ visibility: false, type: '' }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (formData.tech.includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        tech: prevData.tech.filter((tech) => tech !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        tech: [...prevData.tech, value],
      }));
    }
  };

  return (
    <Paper elevation={4} sx={{ height: 'max-content', width: '50%', p: 2, bgcolor: 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>Add Complex Data</Typography>
      <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleInputChange} />
      <FormControl>
        <Typography variant="body1">Tech</Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {techOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={formData.tech.includes(option.value)}
                  onChange={handleTechChange}
                  value={option.value}
                />
              }
              label={option.label}
            />
          ))}
        </Box>
      </FormControl>
      <TextField name="date" label="Date" variant="outlined" value={formData.date} onChange={handleInputChange} />
      <TextField name="progress" label="Progress" variant="outlined" type="number" value={formData.progress} onChange={handleInputChange} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disableElevation variant="contained" sx={{ bgcolor: '#4caf50', ':hover': { bgcolor: '#2e7d32' }, width: '45%', borderRadius: '10px' }} onClick={handleAdd}>Add</Button>
        <Button disableElevation variant="contained" sx={{ color: '#4caf50', bgcolor: 'transparent', ':hover': { bgcolor: '#eee' }, width: '45%', borderRadius: '10px' }} onClick={handleExit}>Cancel</Button>
      </Box>
    </Paper>
  );
};

export default DevelopmentDataForm;
