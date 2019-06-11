const receipts = [];

exports.getAddReceipt = (req, res, next) => {
    res.render('add-receipt', { 
        path: '/admin/add-receipt',
        pageTitle: 'Add Receipt'
	});
};

exports.postAddReceipt = (req, res, next) => {
    const body = req.body;
    console.log(`body,`, JSON.stringify(body));
    receipts.push({
        distance: body.distance,
        volume: body.volume,
        pricePerLiter: body.pricePerLiter
    })
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('dashboard', { 
        path: '/',
        pageTitle: 'Dashboard',
        receipts: receipts
	});
};
