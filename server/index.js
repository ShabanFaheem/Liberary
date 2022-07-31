import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

app.get("/" , function(req, res){
    res.send("Hello world");
})



app.listen(9000, function(){
    console.log("Server Started at port 3000.");
})