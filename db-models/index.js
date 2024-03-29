"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/db-config")[env];
const db = {};

let sequelize;
sequelize = new Sequelize(config);

sequelize
    .authenticate()
    .then(() => {
        console.log("\n[*** Connection has been established successfully. ***]\n");
    })
    .catch(err => {
        console.error("\n[*** Unable to connect to the database:", err + " ***]\n");
    });

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach(file => {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
