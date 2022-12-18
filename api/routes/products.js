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
    if (!data) {
        const error = new Error("Not Found")
        error.status = 404;
        next(error);
        return;
    }
    res.status(200).json({
        status: "Success",
        message: "Successfully fetched",
        data: data
    });
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const i = store.products.findIndex(e => e.id == id);
    if (i === -1) {
        const error = new Error("Not Found")
        error.status = 404;
        next(error);
        return;
    }
    store.products.splice(i, 1);
    res.status(200).json({
        status: "Success",
        message: "Product is deleted",
        data: i
    });
});

module.exports = router;