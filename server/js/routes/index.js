import express from 'express';

// let express = require('express');

export function indexRouter(app) {
    let router = express.Router();

    app.use('/', router);

    router.get('/', (req, res) => {
        res.render('index', {title: 'Express'});
    });

    return router
}

// module.exports = (app) => {
//     let router = express.Router();
//
//     app.use('/', router);
//
//     router.get('/', (req, res, next) => {
//         res.render('index', {title: 'Express'});
//     });
// };
