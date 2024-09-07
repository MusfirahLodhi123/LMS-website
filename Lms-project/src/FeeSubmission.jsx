import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom'; 
import Swal from 'sweetalert2'; 

const FeeSubmission = () => {
  const location = useLocation(); 
  const { className } = location.state || {}; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    class: className || '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.amount || !formData.class) {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }

    Swal.fire('Success', 'Fee submission successful!', 'success');
    
    setFormData({ name: '', email: '', amount: '', class: className || '' });
  };

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        maxWidth: '500px', 
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
        Fee Submission form {className}
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <TextField 
          fullWidth 
          label="Name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        {/* Email input */}
        <TextField 
          fullWidth 
          label="Email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        {/* Amount input */}
        <TextField 
          fullWidth 
          label="Amount" 
          name="amount" 
          type="number" 
          value={formData.amount} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        
        <TextField 
          fullWidth 
          label="Class" 
          name="class" 
          type="text" 
          value={formData.class} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

      
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#8E1DFF', color: 'white', padding: '10px 20px' }} 
          type="submit"
        >
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default FeeSubmission;
