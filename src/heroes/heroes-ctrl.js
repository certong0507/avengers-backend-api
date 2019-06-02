const db = require("../../db-models");

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
                res.status(200).send({ status: 200, response: response });
            } else {
                // res.send({ status: 401, message: "Hero not found." });
                throw new Error("Hero not found. Incorrect username or password.");
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).send({ status: 400, errorMessage: error.message });
        });
};

exports.getHeroList = (req, res) => {
    console.log("===> getHeroList: ", db.Hero);
    db.Hero.findAll()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            console.log(error);
        });
};
