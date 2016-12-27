module.exports = app => {
    app.get('/', function(req, res) {
        console.log("GET /");
        res.render('index');
    });
};