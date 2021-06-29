const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//we are sending the number to api via body

app.get('/',async(req,res)=>{

   //retrieving the input number from api
   const userinput=req.body.number;

   //function to reverse a number: it is a arrow function of javascript
   const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
   
   if(userinput==reversedNum(userinput)){

      res.send({message:"Its a palindrome"});

   }else{
      res.send({message:"Not a palindrome"});
   };
   
})

module.exports=app;
