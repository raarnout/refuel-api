const fs = require('fs');
const path = require('path');
const rootDir = require('../util/rootDir');

module.exports = class Receipt {
    constructor(tripDistance, totalLiters, pricePerLiter) {
        this.totalLiters = totalLiters;
        this.tripDistance = tripDistance;
        this.pricePerLiter = pricePerLiter;
    }

    save() {
        const p = path.join(rootDir, 'data', 'receipts.json');
        fs.readFile(p, (error, fileContent) => {
            let receipts = [];

            if (!error) {
                receipts = JSON.parse(fileContent);
            }
            receipts.push(this);

            fs.writeFile(p, JSON.stringify(receipts), (error) => {
                console.log(error);
            });
        });
    }

    // 'static' functions can called on class without creating instance first.
    static fetchAll() {
        const p = path.join(rootDir, 'data', 'receipts.json');
        fs.readFile(p, (error, fileContent) => {
            if (error) {
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
}
