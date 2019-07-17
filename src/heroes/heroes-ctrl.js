const db = require("../../db-models");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.doLogin = (req, res) => {
    console.log("===> doLogin: ", req.body);
    db.Hero.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        },
    })
        .then(response => {
            if (response) {
                // const token = jwt.sign({ username: req.body.username }, JWT_SECRET_KEY, { expiresIn: "20m" });
                const token = jwt.sign({ username: req.body.username }, JWT_SECRET_KEY);
                res.status(200).send({ status: 200, token, response: response });
            } else {
                throw new Error("Hero not found. Incorrect username or password.");
            }
        })
        .catch(error => {
            res.status(400).send({ status: 400, errorMessage: error.message });
        });
};

exports.getHeroList = (req, res) => {
    console.log("\n===> getHeroList: ", db.Hero);
    db.Hero.findAll()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            console.log(error);
        });
};
