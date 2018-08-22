//importing modeules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var route = require('./routes/route');

//connect to Db
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database on poer 27017');
});

//err connection
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error connecting  to database: '+ err);
    }
});

//port no
const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',route);




//testing server
app.get('/', (req,res)=>{
    res.send('foobar');
});
app.listen(port, ()=> {
    console.log('Server started at port: '+ port);
});