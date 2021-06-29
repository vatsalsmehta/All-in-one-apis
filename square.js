const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/:numberID",async(req,res)=>{

    //console.log(req.params);
    //console.log(req.params["numberID"]);
    const userinput=req.params.numberID;
    const ans=userinput*userinput;
    res.send("Square is "+ans);
})

module.exports=app;