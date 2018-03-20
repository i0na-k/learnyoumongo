var mongoClient  = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var sizematch = process.argv[2];

mongoClient.connect(url,function(err,db){
    if (err) throw err;
    db.collection('prices')
        .aggregate([
            {$match: {size: sizematch}},
            {
                $group: {
                    _id: null,
                    avg: {
                        $avg: '$price'
                    }
                }
            }
            ]).toArray(function(err,results){
                if (err) throw err;
                var num = results[0];
                console.log(Number(num.avg).toFixed(2));
                db.close();
                
            });
});