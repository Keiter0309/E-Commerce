const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const routes = require("../route/routes");
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('strictQuery',false);
app.use(express.static('first-app'))

app.use(cors({
    origin: "http://localhost:4200"
}));

app.listen(port, (err)=>{
    if(err) {
        console.log(err);
    }else {
        console.log(`Server is running ${port}`)
    }
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