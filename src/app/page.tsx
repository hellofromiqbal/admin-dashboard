import Navbar from "@/components/Navbar/Navbar";
import DevelopmentTable from "@/components/Tables/DevelopmentTable";
import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Navbar/>
      <Box sx={{ p: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">Development Table</Typography>
            <Button variant="contained" size="small">
              <Add/>
            </Button>
          </Box>
          <DevelopmentTable/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">Check Table</Typography>
            <Button variant="contained" size="small">
              <Add/>
            </Button>
          </Box>
          <DevelopmentTable/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">4-Column Table</Typography>
            <Button variant="contained" size="small">
              <Add/>
            </Button>
          </Box>
          <DevelopmentTable/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">Complex Table</Typography>
            <Button variant="contained" size="small">
              <Add/>
            </Button>
          </Box>
          <DevelopmentTable/>
        </Box>
      </Box>
    </Box>
  );
}
