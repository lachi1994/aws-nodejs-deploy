const express = require("express");
const app = express();


app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"laxmi",
            hobby:searching,
            contact:12254
        },env:process.env.NAME
    })
});

app.listen(8000,() => {
    console.log("listening to 8000");
})