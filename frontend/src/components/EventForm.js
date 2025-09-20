import React, { useState } from 'react';
import Layout from './Layout';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, date }),
      });
      if (!response.ok) throw new Error('Failed to save event');
      setSuccess('Event created successfully!');
      setName('');
      setDate('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h5" mb={2}>Create Event</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Event Name"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Create
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default EventForm;
