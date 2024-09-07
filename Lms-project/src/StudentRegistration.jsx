import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { db } from './configuration/firebase';
import { collection, addDoc } from 'firebase/firestore';

const StudentRegistration = () => {
  const [student, setStudent] = useState({ name: '', email: '', age: '', phone: '', studentClass: '', field: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'students'), student);
      alert('Student registered successfully!');
      setError('');
      setStudent({ name: '', email: '', age: '', phone: '', studentClass: '', field: '' });
    } catch (error) {
      setError('Error adding student: ' + error.message);
      console.error('Error adding student: ', error);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
      }}
    >
      <div
       
        style={{
          padding: '40px',
          maxWidth: '500px',
        
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          style={{ fontWeight: 'bold' }}
        >
          Student Registration
        </Typography>

        {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={student.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
            value={student.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            margin="normal"
            name="age"
            type="number"
            value={student.age}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            name="phone"
            type="tel"
            value={student.phone}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Class"
            variant="outlined"
            margin="normal"
            name="studentClass"
            value={student.studentClass}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            label="Field"
            variant="outlined"
            margin="normal"
            name="field"
            value={student.field}
            onChange={handleInputChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
         
            fullWidth
            style={{ marginTop: '20px', padding: '10px', borderRadius: '8px',   backgroundColor:"#8E1DFF", color:"white" }}
          >
            Register
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default StudentRegistration;
