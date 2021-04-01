const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send('<h1>Hello World</h1>');
});

app.get("/calc/add", (req,res) =>{
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1 + q2;
    res.send("Answer = " + result);
});

app.listen(3000,function(){
    console.log("The server is running at port 3000");
});