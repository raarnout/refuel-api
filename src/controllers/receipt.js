const Receipt = require('../models/receipt')

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('dashboard/receipt-list', {
            path: '/',
            pageTitle: 'Dashboard',
            receipts
        });
    })
};
