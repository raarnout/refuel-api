const Receipt = require('../models/receipt');

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        showReceipts(res, receipts, '/receipts', 'Receipts');
    })
};

const showReceipts = (res, receipts, path, pageTitle ) => {
    res.render('receipts/index', {
        path,
        pageTitle,
        receipts
    });
};
