import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Grid, Card, CardContent, Typography, CircularProgress, Alert, Box } from '@mui/material';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();
      setBookings(data.bookings);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (loading) {
    return <Box sx={{ textAlign: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>;
  }

  if (bookings.length === 0) {
    return <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>No bookings found.</Typography>;
  }

  return (
    <Layout>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {bookings.map((booking) => (
          <Grid item xs={12} sm={6} md={4} key={booking._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Booking ID: {booking._id}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ticket Count: {booking.ticketCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default BookingList;
