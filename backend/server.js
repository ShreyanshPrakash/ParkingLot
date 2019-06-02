const express = require('express');
const fs = require('fs');
const path = require('path');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;


const config = require('./configuration.json');
const cmsRoute = require('./routes/cms.router.js');


const app = express();
const staticPath = path.join( __dirname, 'ParkingLot/');
const indexHTML = path.join( staticPath, 'index.html');
const ENV = config.envToRun;
const PORT = process.env.PORT || config[ENV].port || 3300;

// Serve static files.
app.use( express.static( staticPath ));
app.use( '/assets', express.static( staticPath ));
// mongoClient.connect( config[ENV].mongoUri,  {useNewUrlParser: true }, async (err, db) =>{
//     console.log( 'connected to mongoDB' );
  

//     await db.db('parkingLotProd').collection('cms').insertOne( header );
    
//     // db.db('parkingLotProd').listCollections().toArray(function(err, collInfos) {
//     //     console.log( collInfos );
//     // });

//     // db.db('parkingLotProd').createCollection('cms', (err, result) => {
//     //     console.log( result );
//     // })
// });

// List all route handlers and respective endpoints
app.use( '/restservices/v1/cms', cmsRoute );


// Serve index.html file
app.get('*', (req,res) => { 
    fs.createReadStream( path.join(__dirname, 'ParkingLot', 'index.html') ).pipe(res);
});



// Catch uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log("----------- Express is Exiting ----------------");
    console.error(`${err.name} : ${err.message}`);
    err.code === 'EADDRINUSE' ? 
        console.log('Please change the port in configuration.json or provide port as env'): null ;
    // console.error(err.stack);
});

process.on('warning', function ( warning ) {
    console.warn(warning.name);    // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack);   // Print the stack trace
});


app.listen(PORT, () => {
    console.log(`Server started and listening at ${PORT}`);
});