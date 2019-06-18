const Receipt = require('../models/receipt');

exports.getIndex = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('dashboard/index', {
            path: '/',
            pageTitle: 'Dashboard',
            receipts
        });
    })
};

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('dashboard/receipt-list', {
            path: '/receipts',
            pageTitle: 'All Receipts',
            receipts
        });
    })
};

exports.getCart = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('dashboard/cart', {
            path: '/cart',
            pageTitle: 'Your Cart'
        });
    })
};

exports.getCheckout = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('dashboard/checkout', {
            path: '/checkout',
            pageTitle: 'Checkout'
        });
    })
};

