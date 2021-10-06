const mongojs = require('mongojs');

const db = mongojs("vehicle", ["car"]);

db.car.find((err, date) => {
    console.log(data);
});