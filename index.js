import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render("partials/index");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})