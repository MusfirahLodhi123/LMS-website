import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const FeeStructure = () => {
  const navigate = useNavigate();

 
  const feeData = [
    { class: 'Class 1', monthlyFee: 2000, yearlyFee: 24000 },
    { class: 'Class 2', monthlyFee: 2200, yearlyFee: 26400 },
    { class: 'Class 3', monthlyFee: 2400, yearlyFee: 28800 },
    { class: 'Class 4', monthlyFee: 2500, yearlyFee: 30000 },
    { class: 'Class 5', monthlyFee: 2600, yearlyFee: 31200 },
    { class: 'Class 6', monthlyFee: 2700, yearlyFee: 32400 },
    { class: 'Class 7', monthlyFee: 2800, yearlyFee: 33600 },
    { class: 'Class 8', monthlyFee: 2900, yearlyFee: 34800 },
    { class: 'Class 9', monthlyFee: 3000, yearlyFee: 36000 },
    { class: 'Class 10', monthlyFee: 3100, yearlyFee: 37200 },
    { class: 'Class 11', monthlyFee: 3200, yearlyFee: 38400 },
    { class: 'Class 12', monthlyFee: 3300, yearlyFee: 39600 }
  ];


  const handlePayNow = (className) => {
    navigate('/fee-submission', { state: { className } }); 
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ marginBottom: '20px', fontWeight: 'bold' }}
      >
        Fee Structure
      </Typography>

     
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px',
        }}
      >
        {feeData.map((fee, index) => (
          <Card 
            key={index} 
            sx={{ 
              width: '300px', 
              textAlign: 'center', 
              backgroundColor: '#f5f5f5', 
              boxShadow: 3, 
              padding: '20px' 
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#8E1DFF', marginBottom: '10px' }}>
                {fee.class}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Monthly Fee: {fee.monthlyFee} Rs
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Yearly Fee: {fee.yearlyFee} Rs
              </Typography>

              
              <Button 
                variant="contained" 
                sx={{ backgroundColor: '#8E1DFF', color: 'white', marginTop: '10px' }} 
                onClick={() => handlePayNow(fee.class)} 
              >
                Pay Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeeStructure;
