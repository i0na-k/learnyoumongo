var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];

var obj = {"firstName" : firstName, "lastName": lastName};

mongoClient.connect(url, function(err,db){
    if (err) throw err;
    db.collection('docs').insert(obj,
        function(err,data){
            if (err) throw err;
            console.log(JSON.stringify(obj));
            db.close();
        
        });
    
});

