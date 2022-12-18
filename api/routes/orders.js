const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "All Orders"
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Order created"
    });
});
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Order details",
        orderId: req.params.id
    });
});

module.exports = router;