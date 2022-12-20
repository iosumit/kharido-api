const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const catogariesRoutes = require('./api/routes/catgories');
const subcatogariesRoutes = require('./api/routes/subcatgories');
const homepageRoutes = require('./api/routes/homepage');
const store = require('./db/db');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Contest-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

store.dbinit();
// app.use('/', (req, res, next) => {
//     res.status(200).json({
//         status: "Success",
//         message: "Server is working"
//     });
// });

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/categories', catogariesRoutes);
app.use('/subcategories', subcatogariesRoutes);
app.use('/homepage', homepageRoutes);
app.use('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Server is working"
    });
});
app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404;
    next(error);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: "Error",
        message: err.message
    })
});

module.exports = app;