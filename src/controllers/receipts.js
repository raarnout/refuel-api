const Receipt = require('../models/receipt');

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        showReceipts(res, receipts, '/receipts', 'Receipts');
    })
};

exports.getReceipt = (req, res, next) => {
    const receiptId = req.params.receiptId;
    console.log(receiptId);
    res.redirect('/');
};

const showReceipts = (res, receipts, path, pageTitle ) => {
    res.render('receipts/index', {
        path,
        pageTitle,
        receipts
    });
};
