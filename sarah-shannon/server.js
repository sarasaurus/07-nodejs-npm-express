'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
// COMMENT: The directory is public because we need all the files to be accessable to the expressJS server. The expressJS server with be our router between the client request (event listener) and our directory's response (the script running or the file that will be loaded).

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!

  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/new', (request, response) => {
  response.status(200).sendfile('./public/new.html');
});

app.use((request, response) => {
  response.status(404).send('no file here, sorry.');
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
