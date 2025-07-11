import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import EventsList from "./components/EventList";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
