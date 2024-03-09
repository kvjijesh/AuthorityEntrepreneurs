const express = require('express');

const app = express();

app.get('/initiate', require('./lib/initiate'));

app.get('/refresh', require('./lib/refresh'));

app.get('/oauth/callback', require('./lib/callback'));

app.get('/getcontacts',require('./lib/getcontact'))

app.get('/get_contact_to_update',require('./lib/getSingleContact'))

app.get('/update',require('./lib/update'))

app.listen(3000, () => {
    console.log("App Listening on 3000 !");
});
