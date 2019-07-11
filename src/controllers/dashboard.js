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
