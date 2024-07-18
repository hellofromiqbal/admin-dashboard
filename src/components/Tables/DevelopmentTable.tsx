'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Adb, Add, Apple, Window, Delete } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { RootState } from '@/utils/redux/store'; 
import { removeDevelopmentTableData } from '@/utils/redux/reducers/developmentTableSlice'
import ProgressValue from './ProgressValue/ProgressValue';

type DevelopmentTableProps = {
  tableTitle: string;
};

interface Column {
  id: 'name' | 'tech' | 'date' | 'progress' | 'action';
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'tech', label: 'Tech', minWidth: 170 },
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

const techIcons: { [key: string]: JSX.Element } = {
  ios: <Apple fontSize="small" />,
  android: <Adb fontSize="small" />,
  windows: <Window fontSize="small" />,
};

export default function DevelopmentTable({ tableTitle }: DevelopmentTableProps) {
  const dispatch = useDispatch();
  const tableRows = useSelector((state: RootState) => state.developmentTable.data);

  const handleDelete = (index: number) => {
    dispatch(removeDevelopmentTableData(index));
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
              {tableRows.map((row: any, rowIndex: number) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'tech' && Array.isArray(row.tech) ? (
                        row.tech.map((tech: string, index: number) => (
                          <React.Fragment key={index}>
                            {index > 0 && ' '}
                            {techIcons[tech]}
                          </React.Fragment>
                        ))
                      ) : column.id === 'progress' ? (
                        <ProgressValue value={row.progress} showProgressBar={true} />
                      ) : column.id === 'action' ? (
                        <IconButton onClick={() => handleDelete(rowIndex)}>
                          <Delete />
                        </IconButton>
                      ) : column.format && typeof row[column.id] !== 'undefined' ? (
                        column.format(row[column.id])
                      ) : (
                        row[column.id]
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
}
