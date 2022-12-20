const store = require('../../db/db');
const msg = require('../../utils/constants');
var omit = require('object.omit');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {

    if (!req.body.phone || !req.body.email || !req.body.password || !req.body.name || !req.body.email) {
        const error = new Error("Body not found");
        error.status = 500;
        next(error);
        return;
    }

    let data = store.users.find((e) => e.phone == req.body.phone || e.email == req.body.email);
    if (data) {
        const error = new Error("Auth failed");
        error.status = 500;
        next(error);
        return;
    }
    let name = req.body.name + "";
    let user = {
        id: "x000" + store.users.length + 1,
        name: req.body.name,
        username: name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        countrycode: req.body.countrycode || "+91",
        created_at: new Date()
    };
    store.users.push(user);
    const token = jwt.sign({
        "id": user.id,
        "email": user.email,
        "phone": user.phone
    }, msg.JWT_KEY, {
        expiresIn: "1h"
    });
    let resuser = omit(user, ['password', 'created_at']);
    res.status(200).json({
        status: msg.success,
        message: "Successfully Created",
        data: {
            user: resuser
        },
        token: token
    });
}

exports.login = (req, res, next) => {
    if (!req.body.phone || !req.body.password) {
        const error = new Error("Body not found");
        error.status = 500;
        next(error);
        return;
    }
    let data = store.users.find((e) => e.phone == req.body.phone && e.password == req.body.password);
    if (!data) {
        const error = new Error("Auth failed");
        error.status = 500;
        next(error);
        return;
    }
    const token = jwt.sign({
        "id": data.id,
        "email": data.email,
        "phone": data.phone
    }, msg.JWT_KEY, {
        expiresIn: "1h"
    });
    data = omit(data, ['password', 'created_at']);
    res.status(200).json({
        status: msg.success,
        message: msg.successmessage,
        data: data,
        token: token
    });
}