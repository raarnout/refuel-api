const Receipt = require('../models/receipt')

exports.getAddReceipt = (req, res, next) => {
    res.render('add-receipt', {
        path: '/admin/add-receipt',
        pageTitle: 'Add Receipt'
    });
};

exports.postAddReceipt = (req, res, next) => {
    const body = req.body;
    const receipt = new Receipt(body.tripDistance, body.totalLiters, body.pricePerLiter);
    receipt.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const receipts = Receipt.fetchAll();
    res.render('dashboard', {
        path: '/',
        pageTitle: 'Dashboard',
        receipts: receipts
    });
};
