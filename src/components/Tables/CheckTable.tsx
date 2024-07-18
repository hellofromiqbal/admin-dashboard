'use client'

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Add, Delete } from '@mui/icons-material';
import { Box, Button, Checkbox, IconButton, Typography } from '@mui/material';
import ProgressValue from './ProgressValue/ProgressValue';
import { RootState } from '@/utils/redux/store'; 
import { removeCheckTableData } from '@/utils/redux/reducers/checkTableSlice'
import { setModalVisibility } from '@/utils/redux/reducers/modalVisibility';

type CheckTableProps = {
  tableTitle: string;
};

interface Column {
  id: 'name' | 'progress' | 'quantity' | 'date' | 'action';
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string;
};

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'progress', label: 'Progress', minWidth: 170, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
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
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

export default function CheckTable({ tableTitle }: CheckTableProps) {
  const dispatch = useDispatch();
  const tableRows = useSelector((state: RootState) => state.checkTable.data);

  const handleDelete = (index: number) => {
    dispatch(removeCheckTableData(index));
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">{tableTitle}</Typography>
        <Button variant="contained" size="small" onClick={() => dispatch(setModalVisibility({ visibility: true, type: 'check-table' }))}>
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                          <Checkbox size='small'/>
                          <Typography variant="body2">{row.name}</Typography>
                        </Box>
                      ) : column.id === 'progress' ? (
                        <ProgressValue value={row.progress}/>
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
