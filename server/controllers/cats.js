var mongoose = require('mongoose');
var Cat = mongoose.model('cats');

module.exports = {
    show_all: function(req, res) {
        Cat.find({}, function(err, results){
            if(err) { 
                console.log(err);
            } else {
                res.render('index', {cats: results});
            }
        });
    },

    create: function(req, res) {
        Cat.create(req.body, function(err){
            if(err) { 
                console.log(err); 
            } else {
                res.redirect('/');
            }
        });
    },

    update: function(req, res){
        Cat.update({_id: req.params.id}, req.body, function(err){
            if(err) { 
                console.log("Show error", err); 
            } else {
                res.redirect('/');
            }
        });
    },

    show_one: function(req, res){
        Cat.find({_id: req.params.id}, function(err, cat){
            if(err) { 
                console.log(err);
            } else {
                console.log(cat);
                res.render('show', {cat: cat});
            }
        });
    },

    edit: function(req, res){
        Cat.find({_id: req.params.id}, function(err, cat){
            if(err) { 
                console.log(err); 
            } else {
                console.log(cat);
                res.render('edit', {cat: cat});
            }
        });
    },

    remove: function(req, res) {
        Cat.remove({_id: req.params.id}, function(err){
            if(err) { 
                console.log("Remove error", err); 
            } else {
                res.redirect('/');
            }
        });
    }
}