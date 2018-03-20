var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageArg = parseInt(process.argv[2]);

mongoClient.connect(url,function(err,db){
    if(err)throw err;
    db.collection('parrots')
        .count({
            age: {$gt: ageArg}
        }, function(err,count){
            if(err)throw err;
            console.log(count);
            db.close();
        });
    
});