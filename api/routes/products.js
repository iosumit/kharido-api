const express = require('express');
const router = express.Router();
const store = require('../../db/db');

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Successfully fetched",
        data: store.products
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Handle Post Request products"
    });
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = store.products.find(e => e.id == id);
    if (!data)
        res.status(200).json({
            status: "Success",
            message: "Found"
        });
    res.status(200).json({
        status: "Success",
        message: "Successfully fetched",
        data: data
    });
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        status: "Success",
        message: "Product is deleted"
    });
});

module.exports = router;