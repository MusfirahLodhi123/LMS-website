import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './configuration/firebase'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjectsCollection = collection(db, 'subjects');
      const subjectSnapshot = await getDocs(subjectsCollection);
      const subjectList = subjectSnapshot.docs.map((doc) => ({
        id: doc.id,  
        ...doc.data(),
      }));
      setSubjects(subjectList);
    };

    fetchSubjects();
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
        Subject List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '700px' }}> 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Subject Name</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Class</TableCell>
              <TableCell sx={{ color: '#8E1DFF', fontWeight: 'bold' }}>Field</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell sx={{ color: '#8E1DFF' }}>{subject.id}</TableCell> 
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.class}</TableCell>
                <TableCell>{subject.field}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SubjectList;
