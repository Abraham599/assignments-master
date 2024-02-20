const express = require("express");

const app = express();

app.post("/health-cheeckup", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have"+kidneyLength+"kidneys");
})

app.listen(3000);