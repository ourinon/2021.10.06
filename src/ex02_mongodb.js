const  MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost';
let db = null;


const dbConnection = (dbUrl, dbName) => {
    MongoClient.connect(dburl, {useUnifiedTopology: true}, callback = (err, client) => {
        if(err) throw err; 
    
        db = client.db("dbName");

        console.log("mongodb 연결 성공", dbUrl, dbName);
    
    });
    
}
