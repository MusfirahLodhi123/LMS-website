import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ExamSchedule = () => {
  // Sample exam schedule data
  const scheduleData = [
    { subject: 'Mathematics', date: '2024-09-10', time: '09:00 AM' },
    { subject: 'English', date: '2024-09-11', time: '11:00 AM' },
    { subject: 'Science', date: '2024-09-12', time: '02:00 PM' },
    { subject: 'History', date: '2024-09-13', time: '09:00 AM' },
    { subject: 'Geography', date: '2024-09-14', time: '11:00 AM' },
    { subject: 'Physics', date: '2024-09-15', time: '02:00 PM' },
    { subject: 'Chemistry', date: '2024-09-16', time: '09:00 AM' },
    { subject: 'Biology', date: '2024-09-17', time: '11:00 AM' }
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
        Exam Schedule
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.subject}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExamSchedule;
