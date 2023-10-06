const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const routes = require("./route/routes");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

mongoose.set('strictQuery',false);
app.use(express.static(path.join(__dirname, "first-app")))

app.use(cors({
    origin: "https://nordics.onrender.com/",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.listen(port, (err)=>{
    if(err) {
        console.log(err);
    }else {
        console.log(`Server is running ${port}`)
    }
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname + "/first-app/index.html"))
})

mongoose.connect("mongodb+srv://Keith:Tuankiet0309@cluster0.abhkbtv.mongodb.net/E-Commerce", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected");
})
.catch((e)=>{
    console.log("Failed");
});

app.use(express.json());
app.use(routes);