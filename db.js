const mongoose = require("mongoose");

mongoose
    .connect(`mongodb://localhost:27017/occ`)
    .then(() => {
        console.log("Database Ready for use!");
    })
    .catch(err => {
        console.error("Error connecting to Database!!");
        console.error(err.stack);
        process.exit(1);
    });

module.exports = mongoose;