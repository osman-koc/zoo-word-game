const express = require('express');
const app = express();
const fs = require('fs');

let dbWords = [];

//Index
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Read the file and store the words in an array
fs.readFile('./words.json', 'utf8', function (err, data) { 
    if (err) throw err;
    dbWords = JSON.parse(data);
});

// Get random word from the array
app.get("/word", function (req, res) { 
    console.log("GET word");
    var randomWord = dbWords[Math.floor(Math.random() * dbWords.length)];
    console.log(randomWord);
    res.send(randomWord);
});

//Server
const server = app.listen(process.env.PORT || 9000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Express server listening at http://%s:%s', host, port);
});