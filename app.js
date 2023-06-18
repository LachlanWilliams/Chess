const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req,res) => {

    //res.send('<p>home page</p>');
    res.sendFile('./pages/index.html', {root: __dirname})

});

app.get('/about', (req,res) => {

    //res.send('<p>about page</p>');
    res.sendFile('./pages/about.html', {root: __dirname})
    
});