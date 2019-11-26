//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

//define routes 
const route = require('./routes')


app.use('/api',route);

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,)))
// define a port number
const port =  3000;

//- testing servers
app.get('/',(req,res) =>{
    res.send('test')
});

// bind server with port

app.listen(port,() =>{
    console.log('server started' + port);
});


//connect to mongoDb
mongoose.connect('mongodb://localhost:27017/events');

//on connection
mongoose.connection.on('connected',() =>{
    console.log('connected');
});

mongoose.connection.on('error',(err) =>{
   if(err){
       console.log(err)
   }
});