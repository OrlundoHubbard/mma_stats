const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/mma', async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://mmaapi.p.rapidapi.com/api/mma/search/mcgregor',
        headers: {
            'X-RapidAPI-Key': process.env.MMA_KEY,
            'X-RapidAPI-Host': 'mmaapi.p.rapidapi.com'
        }
    };


})