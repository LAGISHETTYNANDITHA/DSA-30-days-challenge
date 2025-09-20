import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import BookingList from './components/BookingList';
import BookingForm from './components/BookingForm';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EventMate
            </Typography>
            <Button color="inherit" href="/">Events</Button>
            <Button color="inherit" href="/create">Create Event</Button>
            <Button color="inherit" href="/bookings">Bookings</Button>
            <Button color="inherit" href="/book">Book Ticket</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={EventList} />
          <Route path="/create" component={EventForm} />
          <Route path="/bookings" component={BookingList} />
          <Route path="/book" component={BookingForm} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
