import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Set up EJS
app.set('view engine', 'ejs');


// Fetch a random joke and render the homepage
app.get('/', async (req, res) => {
    try {
        // Fetch a random joke from JokeAPI
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        const joke = response.data;
        res.render('partials/index', { data: joke });
    } catch (error) {
        res.status(500).send('Error fetching joke from API');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});