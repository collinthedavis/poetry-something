// Import required modules
const express = require('express');
const exphbs = require('express-handlebars');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Set up a simple route to render a Handlebars template
app.get('/', (req, res) => {
    // Define data to pass into the template
    const data = {
        title: 'Handlebars Express Demo',
        message: 'Welcome to Handlebars Express!'
    };

    // Render the 'home' template using the provided data
    res.render('home', data);
});

// app.js

// ...Previous code

// Define a route for the about page
app.get('/post-poetry', (req, res) => {
    // Render the about page template
    res.render('post-poetry', {
        title: 'Post your poetry'
    });
});

// Start the server
app.listen(PORT, () => {
});


