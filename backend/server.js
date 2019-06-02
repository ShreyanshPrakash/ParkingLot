const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const staticPath = path.join( __dirname, 'ParkingLot');
const indexHTML = path.join( staticPath, 'index.html');

console.log( indexHTML );
console.log( staticPath );

app.use( express.static( staticPath ));


app.get('*', (req,res) => {
    fs.createReadStream( indexHTML ).pipe(res);
});


app.listen(3000, () => {
    console.log('Server started and listening at 3000');
});