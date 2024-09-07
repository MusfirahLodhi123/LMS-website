import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ResultAnnouncementSchedule = () => {
  // Data for result announcement schedule
  const resultAnnouncementData = [
    { subject: 'Mathematics', date: '2024-09-01', time: '10:00 AM', day: 'Sunday' },
    { subject: 'English', date: '2024-09-02', time: '11:00 AM', day: 'Monday' },
    { subject: 'Science', date: '2024-09-03', time: '10:00 AM', day: 'Tuesday' },
    { subject: 'History', date: '2024-09-04', time: '01:00 PM', day: 'Wednesday' },
    { subject: 'Geography', date: '2024-09-05', time: '09:00 AM', day: 'Thursday' },
    { subject: 'Physics', date: '2024-09-06', time: '02:00 PM', day: 'Friday' },
    { subject: 'Chemistry', date: '2024-09-07', time: '11:00 AM', day: 'Saturday' },
    { subject: 'Biology', date: '2024-09-08', time: '03:00 PM', day: 'Sunday' }
  ];

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        maxWidth: '800px', 
        margin: 'auto', 
        textAlign: 'center', 
        backgroundColor: '#f5f5f5', 
        boxShadow: 3, 
        borderRadius: '10px'
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#8E1DFF' }}
      >
        Result Announcement Schedule
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Time</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultAnnouncementData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>{item.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResultAnnouncementSchedule;
