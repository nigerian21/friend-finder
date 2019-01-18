const express = require('express');
const app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

require('./app/routing/htmlRoutes.js')(app);
app.listen(PORT, () => {
    console.log("App is listening on localhost:8080!")
});