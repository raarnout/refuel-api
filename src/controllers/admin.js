const Receipt = require('../models/receipt');

exports.getAddReceipt = (req, res, next) => {
    res.render('admin/add-receipt', {
        path: '/admin/add-receipt',
        pageTitle: 'Add Receipt'
    });
};

exports.postAddReceipt = (req, res, next) => {
    console.log('post add receipt');
    const body = req.body;
    const receipt = new Receipt(body.tripDistance, body.totalLiters, body.pricePerLiter);
    receipt.save();
    res.redirect('/');
};

exports.getReceipts = (req, res, next) => {
    Receipt.fetchAll(receipts => {
        res.render('admin/receipts', {
            path: '/admin/receipts',
            pageTitle: 'Admin Receipts',
            receipts
        });
    })
};