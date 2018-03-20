var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongoClient.connect(url, function(err,db){
    if(err)throw err;
    db.collection(collectionName).remove({
        _id: id}, function(err,data){
            if(err)throw err;
            db.close();
        });
    
})