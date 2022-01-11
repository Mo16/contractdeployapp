const express = require("express")
const app = express()
const fs = require("fs")
const create = require("./modules/fileCreate")
const bodyParser = require('body-parser')
// const meta = require("./public/main")

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.post("/", urlencodedParser, function (req, res) {


    fs.writeFile('./contracts/contract.sol', create(
        req.body["name"],
        req.body["tikker"],

        req.body["buyRewardFee"],
        req.body["buyLiquidityFee"],
        req.body["buyMarketingFee"],
        req.body["buyDevFee"],

        req.body["sellRewardFee"],
        req.body["sellLiquidityFee"],
        req.body["sellMarketingFee"],
        req.body["sellDevFee"],

        req.body["marketingWalletAddress"],
        req.body["dividendWalletAddress"],
        req.body["devWalletAddress"],
        
        ), (err)=>{
          if(err){
            console.log(err)
          }
        });
    res.render("index.ejs",{qs:req.query});
  });




app.listen(process.env.PORT || 3000, function () {});


