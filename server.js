const express=require('express');
const app=express();
const port=3000;

//this will route it to palindrome.js page if url has /palindrome
var palindromeapi=require('./palindrome.js');
app.use('/palindrome',palindromeapi);

//this will route it to squareroot.js if url has /squareroot
var squarerootapi=require('./squareroot.js');
app.use('/squareroot',squarerootapi);

//this will route it to square.js if url has /square
var squareapi=require('./square.js');
app.use('/square',squareapi);

app.listen(port,()=>{

    console.log("listening on port "+port);

})

app.get('/',async(req,res)=>{

    res.send("Welcome to all in one api. Here I show three methods to traverse data through an API");

})

