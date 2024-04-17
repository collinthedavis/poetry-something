// Import required modules
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser'); // Import body-parser middleware

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

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

// Route to handle form submission
app.post('/submit', (req, res) => {
    // Extract the text from the form submission
    const submittedText = req.body.textbox;

    // Here you can save the submitted text to a database or perform any other actions you need
    // For demonstration purposes, we'll just log it to the console
    console.log('Submitted text:', submittedText);

    // Redirect back to the about page after submitting the form
    res.redirect('/post-poetry');
});

app.get('/view-poems', (req, res) => {
    // Render the about page template
    res.render('view-poems', {
        title: 'View Poems'
    });
});

// Start the server
app.listen(PORT, () => {
});


