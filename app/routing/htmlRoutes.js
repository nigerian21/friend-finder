var path = require('path');

module.exports = function(app) {
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname + '/../public/home.html')
    )

});
app.get('survey', (req, res) => {
    res.sendfile(path.join(__dirname + '/../public/survey.html')
    )

})
}