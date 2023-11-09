const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan =require('morgan');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
// app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routes

const categoriesRoutes= require('./routes/categories');
const orderRoutes= require('./routes/orders');

// const productSchema= mongoose.Schema({
//     name: String,
//     image: String,
//     countInStock: Number
// })

// const Product =mongoose.model('Product', productSchema);

require('dotenv/config');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/orders`,orderRoutes);

// app.get(`${api}/products`, (req, res)=>{
//     const product={
//         id:1,
//         name:"hair dresser",
//         image:'any_img',
//     }
//     res.send(product);
// })

// app.post(`${api}/products`, (req, res)=>{
//     const product=new Product({
//         name: req.body.name,
//         image: req.body.image,
//         countInStock: req.body.countInStock

//     })

//     product.save().then((createdProduct=>{
//         res.status(201).json(createdProduct)
//     })).catch((err)=>{
//         res.status(500).json({
//             error: err,
//             success: false
//         })

//     })
    
//     // res.send(newProduct);
// })

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