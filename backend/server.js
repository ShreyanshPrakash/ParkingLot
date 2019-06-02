const express = require('express');
const fs = require('fs');
const path = require('path');

const mongodb = require('mongodb');

const app = express();
const mongoClient = mongodb.MongoClient;
const config = require('./configuration.json');

const staticPath = path.join( __dirname, 'ParkingLot');
const indexHTML = path.join( staticPath, 'index.html');
const ENV = config.envToRun;
const PORT = config[ENV].port;

// console.log( indexHTML );
// console.log( staticPath );
// console.log( config[ENV] );
// console.log( mongoClient );

app.use( express.static( staticPath ));


app.get('*', (req,res) => {
    fs.createReadStream( indexHTML ).pipe(res);
});

mongoClient.connect( config[ENV].mongoUri,  {useNewUrlParser: true }, (err, db) =>{
    console.log( 'connected to mongoDB' );
    db.db('parkingLotProd').listCollections().toArray(function(err, collInfos) {
        console.log( collInfos );
    });
});


app.listen(PORT, () => {
    console.log(`Server started and listening at ${PORT}`);
});