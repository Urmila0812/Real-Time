import React from 'react';
import './statusofcandidates.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import img1 from '../../Assets/Cell.png';
import img2 from '../../Assets/Cell (1).png';
import img3 from '../../Assets/Cell (2).png';
import img4 from '../../Assets/Cell (3).png';
import img5 from '../../Assets/Cell (4).png';
import img8 from '../../Assets/Cell (5).png';
import img9 from '../../Assets/Cell (6).png';
import img10 from '../../Assets/Cell (7).png';
import img11 from '../../Assets/Cell (8).png';

const data = [
    {
        Profile: img1,
        CandidateName: 'Jenny',
        JobRole: 'UI Designer',
        Experience: '3 Years',
        Salary: '$8,000',
        Status: 'Selected'
    },
    {
        Profile: img2,
        CandidateName: 'Lester Holland',
        JobRole: 'UI Developer',
        Experience: '2 Years',
        Salary: '$7,000',
        Status: 'Selected'
    },
    {
        Profile: img3,
        CandidateName: 'Richard Gregory',
        JobRole: 'QA Testing',
        Experience: '2 Years',
        Salary: '$6,000',
        Status: 'Selected'
    },
    {
        Profile: img4,
        CandidateName: 'Dean Ortega',
        JobRole: 'Graphic Design',
        Experience: '2 Years',
        Salary: '$5,000',
        Status: 'Rejected'
    },
    {
        Profile: img5,
        CandidateName: 'Eugene Griffith',
        JobRole: 'React Developer',
        Experience: '1 Years',
        Salary: '$4,000',
        Status: 'Rejected'
    },
    {
        Profile: img8,
        CandidateName: 'JChristian Allen',
        JobRole: 'UI Designer',
        Experience: '3 Years',
        Salary: '$8,000',
        Status: 'Selected'
    },
    {
        Profile: img9,
        CandidateName: 'Tommy Massey',
        JobRole: 'UI Designer',
        Experience: '1 Years',
        Salary: '$2,000',
        Status: 'Selected'
    },
    {
        Profile: img10,
        CandidateName: 'JeJames Wilkins',
        JobRole: 'QA Testing',
        Experience: '1 Years',
        Salary: '$2,000',
        Status: 'Rejected'
    },
    {
        Profile: img11,
        CandidateName: 'Max Allison',
        JobRole: 'UI Developer',
        Experience: '8 Months',
        Salary: '$2,000',
        Status: 'Rejected'
    },
]

const StatusOfCandidates = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center">Profile</TableCell>
                        <TableCell align="center">Candidate Name </TableCell>
                        <TableCell align="center">Job Role</TableCell>
                        <TableCell align="center" >Experience</TableCell>
                        <TableCell align="center">Salary</TableCell>
                        <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                        <TableRow
                            key={row.Profile}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="center">
                            <img
                                alt="avatar"
                                height={30}
                                src={row.Profile}
                                loading="lazy"
                                style={{ borderRadius: '50%' }}
                                />
                            </TableCell>
                            <TableCell align="center" sx={{'color':'#64748B','border':'1px solid #F8F8F8'}}>{row.CandidateName}</TableCell>
                            <TableCell align="center" sx={{'color':'#64748B','border':'1px solid #F8F8F8'}}>{row.JobRole}</TableCell>
                            <TableCell align="center" sx={{'color':'#64748B','border':'1px solid #F8F8F8'}}>{row.Experience}</TableCell>
                            <TableCell align="center" sx={{'color':'#64748B','border':'1px solid #F8F8F8'}}>{row.Salary}</TableCell>
                            <TableCell align="center" sx={{'color': row.Status === 'Selected'? 'green' : 'red','border':'1px solid #F8F8F8'}}>{row.Status}</TableCell>

                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StatusOfCandidates
