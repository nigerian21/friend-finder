var path = require('path');
var matches = require('../data/friends.js');
module.exports = function(app){
    
    app.get('../daata/friends.js', (req, res) => {
        res.json(matches)
        )
    
    });