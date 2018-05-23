var express = require('express');
var fs = require('fs');
var hbs = require('hbs');

const port = process.env.PORT || 5200;
app = express();
app.use('/assets',express.static('assets'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.get('/',(req,res)=>{
  res.send('<p>This is just an index</p>');
});
app.get('/html',(req,res)=>{
  res.sendFile(__dirname + '/home.html');
});
var obj = {age : 21,name: "Pratyush"};
app.get('/render',(req,res)=>{
  res.render('help.hbs',obj);
});
app.listen(port, ()=>{
  console.log(`server is starting in ${port}`);
});
