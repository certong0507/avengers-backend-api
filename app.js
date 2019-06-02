const express = require("express");
const path = require("path");
const favicon = require('serve-favicon');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const heroesRouter = require("./src/heroes/heroes-rt")

const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/heroes", heroesRouter);

module.exports = app;