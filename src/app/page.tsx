import Navbar from "@/components/Navbar/Navbar";
import CheckTable from "@/components/Tables/CheckTable";
import ComplexTable from "@/components/Tables/ComplexTable";
import DevelopmentTable from "@/components/Tables/DevelopmentTable";
import FourColumnTable from "@/components/Tables/FourColumnTable";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Navbar/>
      <Box sx={{ p: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <DevelopmentTable tableTitle="Development Table"/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <CheckTable tableTitle="Check Table"/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <FourColumnTable tableTitle="4-Column Table"/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'auto', minHeight: '500px', borderRadius: '20px', p: '20px', bgcolor: '#fff' }}>
          <ComplexTable tableTitle="Complex Table"/>
        </Box>
      </Box>
    </Box>
  );
};
