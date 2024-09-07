import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configuration/firebase';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, 'students');
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center"
        sx={{ marginBottom: '20px' }}
      >
        Student List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '700px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Age</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Class</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Field</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell sx={{ color: '#8E1DFF' }}>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.field}</TableCell>
                <TableCell>{student.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentList;
