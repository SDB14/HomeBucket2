//index as server

const express= require("express");
const app=express();

app.listen(8800, ()=>{
    console.log("backend server ready");
})