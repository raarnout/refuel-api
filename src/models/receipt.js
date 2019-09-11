const fs = require('fs');
const path = require('path');
const rootDir = require('../util/rootDir');
const p = path.join(rootDir, 'data', 'receipts.json');

const getReceiptsFromFile = callback => {
    fs.readFile(p, (error, fileContent) => {
        let receipts = [];
        if (!error) {
            receipts = JSON.parse(fileContent);
        }
        callback(receipts);
    });
}

const getTimeStamp = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = today.getFullYear();
    const hour = today.getHours();
    const minutes = today.getMinutes();

    return {
        date: `${day}-${month}-${year}`,
        time: `${hour}:${minutes}`
    }
     
}

const getId = (receipts) => {
    const newArray = receipts.slice();
    newArray.sort((a, b) => (a.id > b.id) ? -1 : 1);
    console.log(`new id = ${newArray[newArray.length - 1].id}`);
    return newArray[0].id + 1; 
}

module.exports = class Receipt {
    constructor(tripDistance, totalLiters, pricePerLiter) {
        const ts = getTimeStamp();
        this.date = ts.date;
        this.time = ts.time;
        this.totalLiters = totalLiters;
        this.tripDistance = tripDistance;
        this.pricePerLiter = pricePerLiter;
    }

    save() {
        getReceiptsFromFile(receipts => {
            this.id = getId(receipts);
            console.log(this.id);
            receipts.push(this);
            fs.writeFile(p, JSON.stringify(receipts), (error) => {
                if (error) {
                    console.log(error);
                }
            });
        })
    }

    // 'static' functions can called on class without creating instance first.
    static fetchAll(callback) {
        getReceiptsFromFile(callback);
    }
}
