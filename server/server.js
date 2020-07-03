const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');



app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static('public'))
app.get('/',(req,res)=>{
  res.status(200).send('connected');
  res.end();
})

//port set to list on 4001
let port = process.env.PORT||4001;
//app set to listen on port 4000
//displays message if connected
app.listen(port,()=>{
  console.log(`Listening on port: ${port}`);
})