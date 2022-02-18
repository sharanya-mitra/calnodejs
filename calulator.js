const express = require('express');
const bodyParser =require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html");
// res.sendFile(__dirname + "/style.css");
});
app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    console.log(num1);
    var num2 = Number(req.body.n2);
    console.log(num2);
    var result = num1+num2;
    console.log(result);
    res.send("The result of the calculator is" +result);});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 