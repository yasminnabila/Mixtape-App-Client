# Mixtape App

Browse & stream your favorite music here!

This project was my take on Spotify where users can stream New Releases music pulled from Spotify API.

On page load, the user is shown the daily 20 newly released albums as per Spotify.com.

Click on the card and user will be able to see album details and even stream the music for 30 secs.

## Features
* Designed using principles learned in Hacktiv8's Fundamentals course
* Minimalist and responsive design
* Accessing multi-level databases stored in Heroku
* ECMAS Arrow functions + Function Declarations

## Demo

Here is a working [_live demo_]https://iproject-mixtape.web.app/). 
Login details:
- E-mail: admin@outlook.com
- Password: 12345

## Stack
<a name="stack"></a>

### Frontend
* [Vue](https://vuejs.org/) to compose the UI
* [Vue Router](https://router.vuejs.org/) to manage the routes
* [Pinia](https://pinia.vuejs.org/) to share a state across components/pages
* [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/) to help with the styling and accessibility
* [Axios](https://axios-http.com/) to make HTTP requests to fetch or save data
* [Firebase](https://firebase.google.com/) to host the deployed app
* [Vite](https://vitejs.dev/) to improve bundling and development

### Backend
* [NodeJS](https://nodejs.org/en/) to run the server
* [Express JS](https://expressjs.com/) to provide MVC in web app design
* [PostgreSQL](https://www.postgresql.org/) server to manage the data fetching declaratively
* [Spotify API](https://www.npmjs.com/package/spotify-web-api-node) as wrapper/client for the Spotify Web API that runs on Node.JS 
* [Midtrans Client](https://docs.midtrans.com/en/snap/overview) to integrate with Midtrans payment system
