require("dotenv").config();

const developmentLogger = require("../config/developmentLogger");
const productionLogger = require("../config/productionLogger");

let logger = null;

if(process.env.NODE_ENV === "development") {
    logger = developmentLogger();
}
if(process.env.NODE_ENV === "production") {
    logger = productionLogger();
}
module.exports = logger;
