'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Add, CheckCircle, Cancel, ErrorOutline, Delete } from '@mui/icons-material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button, IconButton, styled, Typography } from '@mui/material';

type ComplexTableProps = {
  tableTitle: string;
};

interface Column {
  id: 'name' | 'status' | 'date' | 'progress' | 'action';
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string;
};

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
    format: (value: string | number) =>
      new Date(value).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
  },
  {
    id: 'progress',
    label: 'Progress',
    minWidth: 170,
    align: 'left',
    format: (value: string | number) => `${value}%`,
  },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

interface Data {
  name: string;
  status: 'Approved' | 'Disabled' | 'Error';
  date: number;
  progress: number;
};

function createData(
  name: string,
  status: 'Approved' | 'Disabled' | 'Error',
  date: number,
  progress: number
): Data {
  return { name, status, date, progress };
};

const rows: Data[] = [
  createData('Product Alpha', 'Approved', Date.parse('2023-05-01'), 75.3),
  createData('Product Beta', 'Disabled', Date.parse('2023-06-15'), 50.4),
  createData('Product Gamma', 'Error', Date.parse('2023-07-20'), 90.7),
  createData('Product Delta', 'Approved', Date.parse('2023-08-10'), 65.8),
  createData('Product Epsilon', 'Disabled', Date.parse('2023-09-05'), 85.6),
  createData('Product Zeta', 'Error', Date.parse('2023-10-12'), 40.3),
];

const statusIcons = {
  Approved: <CheckCircle fontSize="small" color="success" />,
  Disabled: <Cancel fontSize="small" color="error" />,
  Error: <ErrorOutline fontSize="small" color="warning" />,
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

export default function ComplexTable({ tableTitle }: ComplexTableProps) {
  const [tableRows, setTableRows] = React.useState(rows);

  const handleDelete = (index: number) => {
    const newRows = tableRows.filter((_, i) => i !== index);
    setTableRows(newRows);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">{tableTitle}</Typography>
        <Button variant="contained" size="small">
          <Add />
        </Button>
      </Box>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'status' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          {statusIcons[row.status]}
                          <Typography variant="body2">{row.status}</Typography>
                        </Box>
                      ) : column.id === 'progress' ? (
                        <BorderLinearProgress variant="determinate" sx={{ width: '80px' }} value={row.progress} />
                      ) : column.id === 'action' ? (
                        <IconButton onClick={() => handleDelete(rowIndex)}>
                          <Delete />
                        </IconButton>
                      ) : column.format && typeof row[column.id] !== 'undefined' ? (
                        <Typography variant="body2">{column.format(row[column.id])}</Typography>
                      ) : (
                        <Typography variant="body2">{row[column.id]}</Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
