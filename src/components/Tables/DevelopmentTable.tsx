'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Adb, Apple, Window } from '@mui/icons-material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, styled, Typography } from '@mui/material';

interface Column {
  id: 'name' | 'tech' | 'date' | 'progress';
  label: string;
  minWidth?: number;
  align?: 'left' | 'right';
  format?: (value: any) => string;
};

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'tech', label: 'Tech', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
    format: (value: string | number) => new Date(value).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }),
  },
  {
    id: 'progress',
    label: 'Progress',
    minWidth: 170,
    align: 'left',
    format: (value: string | number) => `${value}%`,
  },
];

interface Data {
  name: string;
  tech: ('apple' | 'android' | 'windows')[];
  date: number;
  progress: number;
};

function createData(
  name: string,
  tech: ('apple' | 'android' | 'windows')[],
  date: number,
  progress: number,
): Data {
  return { name, tech, date, progress };
};

const rows: Data[] = [
  createData('Project Alpha', ["apple", "android", "windows"], Date.parse('2023-05-01'), 75.3),
  createData('Project Beta', ["apple"], Date.parse('2023-06-15'), 50.4),
  createData('Project Gamma', ["apple", "windows"], Date.parse('2023-07-20'), 90.7),
  createData('Project Delta', ["apple", "android", "windows"], Date.parse('2023-08-10'), 65.8),
  createData('Project Epsilon', ["apple", "windows"], Date.parse('2023-09-05'), 85.6),
  createData('Project Zeta', ["apple", "android", "windows"], Date.parse('2023-10-12'), 40.3),
];

const techIcons = {
  apple: <Apple fontSize='small'/>,
  android: <Adb fontSize='small'/>,
  windows: <Window fontSize='small'/>,
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

export default function DevelopmentTable() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'tech' && Array.isArray(row.tech)
                      ? row.tech.map((tech, index) => (
                          <React.Fragment key={index}>
                            {index > 0 && ' '}
                            {techIcons[tech]}
                          </React.Fragment>
                        ))
                      : column.id === 'progress'
                      ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Typography>{row.progress}%</Typography>
                          <BorderLinearProgress variant="determinate" sx={{ width: '80px' }} value={row.progress} />
                        </Box>
                        )
                      : column.format && typeof row[column.id] !== 'undefined'
                      ? column.format(row[column.id])
                      : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
