import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=venue`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_EVENTBRITE_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!event) return <p>No event data available.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/">← Back to Events</Link>
      <h1>{event.name?.text}</h1>
      <p>{event.description?.text}</p>
      <p><strong>Start:</strong> {event.start?.local}</p>
      <p><strong>End:</strong> {event.end?.local}</p>
      <p><strong>Venue:</strong> {event.venue?.name || 'Venue info not available'}</p>
      <a href={event.url} target="_blank" rel="noopener noreferrer">
        View Event on Eventbrite
      </a>
    </div>
  );
}

export default EventDetails;
