import express from "express"
import bodyParser  from "body-parser"
import { render } from "ejs";

const port=3000;
const app=express();
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));


 app.get("/",(req,res)=>{
    res.render("index.ejs");
 })

 app.post("/submit",(req,res)=>{
    if(req.body["psdw"]==="bc193160")
    {
        res.render("secerete.ejs");
    }
    else{
        
        res.render("index.ejs");
    }
 })


app.listen(port,()=>{
    console.log(`server running at ${port}`);
})