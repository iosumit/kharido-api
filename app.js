const express = require('express');
const app = express();
const morgan = require('morgan');
const body = require('body-parser');


const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.status(200).json({
//         status: "Success",
//         message: "Server is working"
//     });
// });

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

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