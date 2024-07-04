const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment.controller');

module.exports = function Route(app) {
    app.post('/create-order', paymentController.createOrder);
    app.get('/:payment_id/:amount/:BID', paymentController.verifyOrder);
}