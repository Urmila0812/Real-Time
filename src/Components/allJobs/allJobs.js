import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './allJobs.css';

const data = [
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Rejected',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    },
    {
        jobRole: 'UI Designer',
        employementType: 'Full-time',
        experience: '3 Years',
        salary: '$8000',
        status: 'Accepted',
    }
]

function AllJobs() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Job Role</TableCell>
              <TableCell align="center">Employement Type</TableCell>
              <TableCell align="center">Experience</TableCell>
              <TableCell align="center">Salary</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.jobRole}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.jobRole}
                </TableCell>
                <TableCell align="center" sx={{'color':'#64748B'}}>{row.employementType}</TableCell>
                <TableCell align="center" sx={{'color':'#64748B'}}>{row.experience}</TableCell>
                <TableCell align="center" sx={{'color':'#64748B'}}>{row.salary}</TableCell>
                <TableCell align="center" sx={{'color':  row.status === 'Accepted' ? 'green':'red' }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  export default AllJobs;