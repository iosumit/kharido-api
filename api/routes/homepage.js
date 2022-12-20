const express = require('express');
const router = express.Router();
const store = require('../../db/db');
const msg = require('../../utils/constants');

router.get('/banners', (req, res, next) => {
    res.status(200).json({
        status: msg.success,
        message: msg.successmessage,
        data: store.banners
    });
});

router.get('/banners/:id', (req, res, next) => {
    const id = req.params.id;
    const data = store.banners.filter(e => e.id == id);
    res.status(200).json({
        status: msg.success,
        message: msg.successmessage,
        data: data
    });
});

module.exports = router;