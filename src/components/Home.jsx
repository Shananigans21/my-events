import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Events Hub</h1>
      <img
        className="home-image"
        src="https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-ff94111/spotme.com/wp-content/uploads/2020/07/Hero-1.jpg"
        alt="Event banner"
      />
      <Link to="/events">
        <button className="home-button">View Events</button>
      </Link>
    </div>
  );
}

export default Home;
