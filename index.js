// Import express. This represents our application
const express = require('express');
const app = express();

// This app object has methods: get(), post(), put() and delete() which takes two arguments
// The first argument is the url or the route of the website
// The second argument is a callback function (route handler), this will be called when we have a HTTP request to the url
app.get('/', (req, res) => {
	res.send('Hello World!!!')
});

// So we define new routes by calling app.get(). We can also move these routes to different files
app.get('/api/courses', (req, res) => {
	res.send([1, 2, 3]);
})

// If there's a environment variable for PORT, use this value. Otherwise use port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})