const express = require('express')
const app = express();
const path=require('path');

const mongoose=require('mongoose');
var config=require('./config/database');
const bodyparser=require("body-parser");


mongoose.Promise=global.Promise;

//connect mongodb
mongoose.connect(config.database,{useNewUrlParser:true});



app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());






const index=require('./routes/index.js');

app.use('/',index);











app.listen(4100,(req,res)=>{
    console.log('server started at 4100');
})