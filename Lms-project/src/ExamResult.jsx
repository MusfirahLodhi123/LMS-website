import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ExamResults = () => {
  // Sample exam results data
  const resultsData = [
    { name: 'Ahmed Khan', subject: 'Mathematics', score: 85, grade: 'A' },
    { name: 'Fatima Ali', subject: 'English', score: 92, grade: 'A+' },
    { name: 'Ali Raza', subject: 'Science', score: 78, grade: 'B' },
    { name: 'Sara Ahmed', subject: 'History', score: 88, grade: 'A' },
    { name: 'Hassan Malik', subject: 'Geography', score: 81, grade: 'A-' },
    { name: 'Ayesha Khan', subject: 'Physics', score: 90, grade: 'A+' },
    { name: 'Usman Sheikh', subject: 'Chemistry', score: 75, grade: 'B' },
    { name: 'Nida Shah', subject: 'Biology', score: 87, grade: 'A' },
    { name: 'Bilal Qureshi', subject: 'Mathematics', score: 79, grade: 'B+' },
    { name: 'Mariam Javed', subject: 'English', score: 95, grade: 'A+' }
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
        Exam Results
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Student Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Score</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsData.map((result, index) => (
              <TableRow key={index}>
                <TableCell>{result.name}</TableCell>
                <TableCell>{result.subject}</TableCell>
                <TableCell>{result.score}</TableCell>
                <TableCell>{result.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExamResults;
