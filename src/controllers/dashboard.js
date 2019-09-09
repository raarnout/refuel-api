const Receipt = require('../models/receipt');

exports.getIndex = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        showReceipts(res, receipts, '/', 'Dashboard')
    })
};

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        showReceipts(res, receipts, '/receipts', 'All Receipts')
    })
};

const showReceipts = (res, receipts, path, pageTitle ) => {
    res.render('dashboard/receipt-list', {
        path,
        pageTitle,
        receipts
    });
};