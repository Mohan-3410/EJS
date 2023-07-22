const express = require("express");
const bodyParser = require("body-parser");
const Date = require(__dirname + "/date.js")

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

const items=[];
const workItems=[];
// why array should be a constant?
// basically its depends on language. in javascript assigning the value is called variable. updating the array still be a constant
// because we dont change the value of exist array. we only add new value.

app.get("/", function (req, res) {
  
  const day = Date.getDate();
  res.render("list", {nameOfList : day , newListItem : items});
});

app.post("/", function(req,res){

  let item = req.body.newItem;
  if(req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
  
})

app.get("/work", function(req,res){
  
  res.render("list", {nameOfList: "Work List", newListItem : workItems});

})
app.post("/work", function(req,res){
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.get("/about", function(req,res){
  res.render("contact")
})
app.listen(3001, function () {
  console.log("server started on port 3000");
});
