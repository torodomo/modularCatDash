var cats = require('../controllers/cats.js');

module.exports = function(app) {
    app.get('/', function(req, res){
        cats.show_all(req, res);
    });

    app.get('/cats/new', function(req, res){
        res.render('new');
    });

    app.get('/cats/:id', function(req, res){
        cats.show_one(req, res);
    });

    app.get('/cats/edit/:id', function(req, res){
        cats.edit(req, res);
    });

    app.post('/cats/new', function(req, res){
       cats.create(req, res);
    });
    
    app.post('/cats/:id', function(req, res){
        cats.update(req, res);
    });
    
    app.post('/cats/destroy/:id', function(req, res){
        cats.remove(req,res);
    });

}