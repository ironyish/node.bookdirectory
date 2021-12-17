const bodyParser = require('body-parser');
const express=require('express');
 const app=express()
 const api=require('./api');




 app.use(bodyParser.json());
 app.use('/api', api);


 app.listen(4500,()=>{
     console.log("listening");
 })

















