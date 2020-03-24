var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + "/";
const PORT = 8080;
const HOST = '0.0.0.0';


router.get("/",function(req,res){
    res.sendFile(path + "index.html");
});
app.use(express.static(path));
app.use("/", router);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
  })