import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './configuration/firebase'; // Ensure the path is correct

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed up successfully:', userCredential);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        backgroundColor: '#f0f0f0' 
      }}
    >
      <Paper 
        elevation={6} 
        style={{
          padding: '40px',
          maxWidth: '400px',
          borderRadius: '15px',
          backgroundColor: '#fff',
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          style={{ fontWeight: 'bold', color: '#333' }}
        >
          Signup
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px', padding: '10px', borderRadius: '8px' }}
          >
            Sign Up
          </Button>
        </form>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account?{' '}
            <Button
              onClick={() => navigate('/login')}
              style={{ color: '#1976d2', textDecoration: 'underline' }}
            >
              Go to Login
            </Button>
          </Typography>
        </Box>
      </Paper>

 
    </Box>
  );
};

export default Signup;
