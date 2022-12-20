const express = require('express');
const router = express.Router();
const store = require('../../db/db');
const msg = require('../../utils/constants');

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: msg.success,
        message: msg.successmessage,
        data: store.categories
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = store.categories.find(e => e.id == id);
    res.status(200).json({
        status: msg.success,
        message: msg.successmessage,
        data: data
    });
});

module.exports = router;