import Navbar from "@/components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Navbar/>
      <Box sx={{ p: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Box sx={{ minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Typography variant="h5">Development Table</Typography>
        </Box>
        <Box sx={{ minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Typography variant="h5">Check Table</Typography>
        </Box>
        <Box sx={{ minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Typography variant="h5">4-Column Table</Typography>
        </Box>
        <Box sx={{ minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Typography variant="h5">Complex Table</Typography>
        </Box>
      </Box>
    </Box>
  );
}
