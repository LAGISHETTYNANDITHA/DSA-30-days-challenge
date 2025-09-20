import React, { useState } from 'react';
import Layout from './Layout';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const BookingForm = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketCount }),
      });
      if (!response.ok) throw new Error('Failed to save booking');
      setSuccess('Booking created successfully!');
      setTicketCount(1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h5" mb={2}>Create Booking</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ticket Count"
            type="number"
            fullWidth
            required
            margin="normal"
            inputProps={{ min: 1 }}
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Book
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default BookingForm;
