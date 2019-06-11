const receipts = [];

module.exports = class Receipt {
    constructor(tripDistance, totalLiters, pricePerLiter) {
        this.totalLiters = totalLiters;
        this.tripDistance = tripDistance;
        this.pricePerLiter = pricePerLiter;
    }

    save() {
        // 'this' referce to the object created based on the class.
        receipts.push(this);
    }

    // 'static' functions can called on class without creating instance first.
    static fetchAll() {
        return receipts;
    }
}
