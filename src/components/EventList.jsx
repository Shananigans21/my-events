import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';  

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.eventbriteapi.com/v3/organizations/2832094003071/events/?token=${import.meta.env.VITE_EVENTBRITE_TOKEN}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.text.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className="events-container">
      <h1 className="events-title">My Eventbrite Events</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search events"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredEvents.length === 0 ? (
        <p>No events match your search.</p>
      ) : (
        filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2 className="event-name">{event.name.text}</h2>
            <p className="event-description">
              {event.description?.text
                ? event.description.text.slice(0, 120) + (event.description.text.length > 120 ? '...' : '')
                : 'No description'}
            </p>
            <p className="event-start"><strong>Start:</strong> {event.start.local}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
              View Event
            </a><br />
            <Link to={`/events/${event.id}`} className="event-link">
              View Event Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default EventsList;
