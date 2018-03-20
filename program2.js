var mongoClient = require('mongodb').MongoClient;
var findAge = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    db.collection('parrots').find(
        {"age": {$gt:findAge}},
        {"name": 1,
        "age": 1,
        "_id": 0
    }).toArray(function(err,documents){
        if (err){
            throw err;
        }
        console.log(documents);
    });
    db.close();
});