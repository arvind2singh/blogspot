const express = require('express');
const app = express();
const data = require('./country.json');


app.get('/get_country',(req, res) => {
    return {
        data: data,
        status: 1
    }
})





app.listen('3001', () => console.log('serevre start'));