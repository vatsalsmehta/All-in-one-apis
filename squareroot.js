const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{

    const inputman=req.query.number;
    var ans=Math.sqrt( inputman );

    res.send({message:"The Square root is "+ans});

})

module.exports=app;