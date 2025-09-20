import React, { useEffect, useState } from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        const response = await fetch('/api/bookings');
        const data = await response.json();
        setBookings(data);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Your Bookings</h1>
            <BookingList bookings={bookings} />
            <BookingForm fetchBookings={fetchBookings} />
        </div>
    );
};

export default Bookings;