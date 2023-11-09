const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan =require('morgan');
const mongoose = require('mongoose');

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res)=>{
    const product={
        id:1,
        name:"hair dresser",
        image:'any_img',
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res)=>{
    const newProduct=req.body;
    console.log(newProduct);
    res.send(newProduct);
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecom-database'
})
.then(()=>{
    console.log('Database connection is ready');
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})