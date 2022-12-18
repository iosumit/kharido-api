const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Handle Get Request products"
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
    if (id === 'special')
        res.status(200).json({
            status: "Success",
            message: "Product not found"
        });
    res.status(200).json({
        status: "Success",
        message: "Found"
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