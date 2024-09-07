import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configuration/firebase';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
 
    const fetchTeachers = async () => {
      const teachersCollection = collection(db, 'teachers');
      const teacherSnapshot = await getDocs(teachersCollection);
      const teacherList = teacherSnapshot.docs.map((doc) => ({
        id: doc.id,  
        ...doc.data(),
      }));
      setTeachers(teacherList);
    };

    fetchTeachers();
  }, []);

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center' //
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center" 
        sx={{ marginBottom: '20px' }}
      >
        Teacher List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '700px' }}> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Age</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Department</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell sx={{ color: '#8E1DFF' }}>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.department}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TeacherList;
