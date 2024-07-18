'use client'

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Add, Cancel, CheckCircle, Delete, ErrorOutline } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ProgressValue from './ProgressValue/ProgressValue';
import { RootState } from '@/utils/redux/store'; 
import { removeComplexTableData } from '@/utils/redux/reducers/complexTableSlice'
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';

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
  { id: 'status', label: 'Status', minWidth: 170, align: 'left' },
  { id: 'date', label: 'Date', minWidth: 170, align: 'left' },
  { id: 'progress', label: 'Progress', minWidth: 170, align: 'left' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

interface Data {
  name: string;
  status: string;
  date: string;
  progress: number;
};

export default function ComplexTable({ tableTitle }: ComplexTableProps) {
  const dispatch = useDispatch();
  const tableRows = useSelector((state: RootState) => state.complexTable.data);

  const handleDelete = (index: number) => {
    dispatch(removeComplexTableData(index));
  };

  const statusIcons: { [key: string]: JSX.Element } = {
    approved: <CheckCircle fontSize="small" color="success" />,
    disabled: <Cancel fontSize="small" color="error" />,
    error: <ErrorOutline fontSize="small" color="warning" />,
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">{tableTitle}</Typography>
        <Button variant="contained" size="small" onClick={() => dispatch(setModalVisibility({ visibility: true, type: 'complex-table' }))}>
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
                      {column.id === 'name' ? (
                        <Typography variant="body2">{row.name}</Typography>
                      ) : column.id === 'status' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          {statusIcons[row.status]}
                          <Typography variant="body2">{row.status}</Typography>
                        </Box>
                      ) : column.id === 'date' ? (
                        <Typography variant="body2">{row.date}</Typography>
                      ) : column.id === 'progress' ? (
                        <ProgressValue value={row.progress}/>
                      ) : column.id === 'action' ? (
                        <IconButton onClick={() => handleDelete(rowIndex)}>
                          <Delete />
                        </IconButton>
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
