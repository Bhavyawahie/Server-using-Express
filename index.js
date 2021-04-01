const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send('<h1>Hello World!</h1>');
});

/*app.get("/calc/add", (req,res) =>{
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1 + q2;
    res.send("Answer = " + result);
});*/

app.get("/contact-me", (req, res) =>{
    res.send("Contact me at <a href='mailto:bhavyawahie@ieee.org'>my email</a>");
});

app.get("/about", (req, res) =>{
    res.send("My name is Bhavya Wahie. I am 20 years old. <br> I am a Web Dev.")
});

app.get("/connect-with-me", (req, res) =>{
    res.send('<ul><li><a href="https://www.instagram.com/bhavyawahie">instagram</a></li><li><a href="https://www.twitter.com/bhavyawahie">twitter</a></li><li><a href="https://www.linkedin.com/in/bhavya-wahie">linkedIn</a></li></ul>')
});

app.listen(3000,function(){
    console.log("The server is running at port 3000");
});