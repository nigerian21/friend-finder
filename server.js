const express = require('express');
const app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);
