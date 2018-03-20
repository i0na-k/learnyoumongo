var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log(url);
    db.collection('users').update(
        {"username": "tinatime"},
        {$set: {"age": 40}}, function(err,data){
            if (err) throw err;
            console.log(data);
            db.close();
        });
});