                    My Events App

A simple React application that fetches and displays events from Evenbrite API. Users can view listigs, click into event details, and search for events all powered by live data from the Eventbrite platform. 

///Project Description

This project demonstrates how to use React to:
1. Fetch external API data asynchronously
2. Render event listings dynamically
3. Navigate using React Router
4. Display detailed views of selected events
5. Applt basic search filtering
6. Improving UI with loading/error states and custom styles

Built as part of a lab assignment to explore component structure, API integration, and single-page navigation.

//Setup Instructions

🛠️ Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/my-eventbrite-events.git
cd my-eventbrite-events
Install dependencies:

bash
Copy code
npm install
Set up your environment variable:

Create a .env file in the root of your project and add the following line:

env
Copy code
VITE_EVENTBRITE_TOKEN=your_eventbrite_private_token_here
Be sure not to commit your .env file to version control. It contains your private API token.

Run the app:

If you followed the official React from scratch guide, you likely have a start script defined in package.json. If not, add one like this:

json
"scripts": {
  "start": "node server.js"
}
Then run:

bash
Copy code
npm start
If you're using a development server like Vite or a tool like esbuild or webpack, make sure you start it with the appropriate command.

Visit the app:

Open your browser to:

arduino
Copy code
http://localhost:3000/
Or whatever port you're using in your server.js or development setup.


//API Used
Eventbrite API

Organization Events:
GET https://www.eventbriteapi.com/v3/organizations/{organization_id}/events/

Single Event Details:
GET https://www.eventbriteapi.com/v3/events/{event_id}/

Token-based access using the Authorization: Bearer <token> header or ?token=... URL parameter.

//Features
View all upcoming events from your Eventbrite organization

Click to view full event details including description, time, and link

Search events by name

Loading and error handling

Navigation via React Router

Clean and mobile-friendly layout

//Known Issues / Challenges
Event Descriptions: Some events have missing or very long descriptions; handled by slicing and fallback.

Venue Data: The current API responses may not always include venue info. Consider extending with an additional venue fetch.

API Limitations: The Eventbrite API uses pagination and rate-limiting. Only the first 50 events are loaded; continuation token logic is not yet implemented.

CORS Handling: All requests must include proper auth headers or token query string to avoid CORS/401 errors.



