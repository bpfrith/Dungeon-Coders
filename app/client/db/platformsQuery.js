var MongoClient = require('mongodb').MongoClient;

var GamesQuery = function(){
  this.url = 'mongodb://localhost:27017/the_dungeon';
}

PlatformsQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var questions = db.collection('questions');
      questions.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
}

module.exports = PlatformsQuery;