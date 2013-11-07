var express = require('express');
var ArticleProvider = require('../persistence/ArticleProvider').ArticleProvider;

var app = module.exports = express();

app.configure(function(){
  app.set('views', '../views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: '../public' }));
  app.use(app.router);
  app.use(express.static('../public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var articleProvider = new ArticleProvider();

app.get('/', function(req, res){
  articleProvider.findAll(function(error, docs){
      res.send(docs);
  });
});

app.listen(3000);