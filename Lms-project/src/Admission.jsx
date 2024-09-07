import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AdmissionForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      alert('Please fill in all fields');
      return;
    }

    // If all fields are filled, submit the form
    alert('Form submitted successfully!');
    console.log(formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        maxWidth: '600px', 
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
        Admission Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth 
          label="Name" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="Email" 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="Phone" 
          name="phone" 
          type="tel" 
          value={formData.phone} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="Address" 
          name="address" 
          value={formData.address} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="City" 
          name="city" 
          value={formData.city} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="State" 
          name="state" 
          value={formData.state} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <TextField 
          fullWidth 
          label="ZIP Code" 
          name="zip" 
          type="number" 
          value={formData.zip} 
          onChange={handleInputChange} 
          sx={{ marginBottom: '20px' }} 
        />

        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#8E1DFF', color: 'white', padding: '10px 20px' }} 
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AdmissionForm;
